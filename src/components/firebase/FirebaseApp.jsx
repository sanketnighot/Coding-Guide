import React from 'react';
import firebase from "firebase/app";
require('firebase/firestore');
require('firebase/auth');

const firebaseConfig = {
	apiKey: "AIzaSyAXJtph7xZ0hkJ5Ekkp-ZoQo43uRQOq0tU",
	authDomain: "fir-apps-df369.firebaseapp.com",
	databaseURL: "https://fir-apps-df369.firebaseio.com",
	projectId: "fir-apps-df369",
	storageBucket: "fir-apps-df369.appspot.com",
	messagingSenderId: "1032755084411",
	appId: "1:1032755084411:web:e2e61e0fde70fd090b36de",
	measurementId: "G-XCEZEDXK16"
};
// const firestore = firebase.firestore();

async function FirebaseSignup(name, username, email, password) {
	try {
		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig);
		}
		const auth = firebase.auth();
		await auth.createUserWithEmailAndPassword(email, password);
		let user =  auth.currentUser
		user.sendEmailVerification().then(function() {
			alert("Please Check Email to verify your account");
		  }).catch(function(error) {
			alert("An error occured ... Please try again");
		  });
		user.updateProfile({
			username: username,
			name: name,
			email: email,
			password: password
		})
		alert("Account Created Successfully !!!");

	} catch (error) {
		alert(error);
	}
}

async function FirebaseLogin(email, password) {
	try {
		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig);
		}
		const auth = firebase.auth();
		return auth.signInWithEmailAndPassword(email, password);
	} catch (error) {

	}

}

const FirebaseLogout = (email, password) => {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
	const auth = firebase.auth();
	return auth.signOut();
}

async function fbContactForm(name, email, message) {
	try {
		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig);
		}
		var db = firebase.firestore();
		db.collection("ContactForm").add({
			"senderName" : name,
			"senderEmail" : email,
			"senderMessage" : message

		});
	}
	catch (error){
		alert(error)
	}
}

export { FirebaseSignup, FirebaseLogin, FirebaseLogout, fbContactForm };