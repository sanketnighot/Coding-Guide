import React from 'react';
import ScrollableTabsButtonAuto from './ScrollableTabsButtonAuto';

const LoginSignup = () => {
    return(
        <>
        <div className="row">
            <div className=" col-md-10 mt-5">
                <h1 className="text-center mt-5">Login/SignUp</h1>
            </div>
            </div>
                <div className="mt-5 col-md-10" align="center">
                    <ScrollableTabsButtonAuto/>
                </div>
        </>)
}

export default LoginSignup;