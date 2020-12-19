import React from 'react';
import MediaCard from './MediaCard';


const About = () => {
    return (
        <>
            <div className="mt-5 col-10">
                <h1 className="text-center mt-5">{"< "}<strong>About Us</strong>{" />"}</h1>
            </div>
            <div>
                <div className="m-5">
                    <p className=" md col-6" style={{ textAlign: 'center' }}>
                        This is a final year project created by the team of 3 students. <br />
                    </p>
                </div>
                <div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <a href="https://github.com" target="_blank" style={{textDecoration: "none"}}>
                                    <MediaCard
                                        image="https://picsum.photos/100/100"
                                        name="Tanaya Jadhav"
                                        descrpiton="Lorem Ipsum is simply dummy text of the printing and 
                                                typesetting industry. Lorem Ipsum has been the industry's 
                                                standard dummy text ever since the 1500s, when an unknown 
                                                printer took a galley of type and scrambled it to make a 
                                                type specimen book. "
                                        github="https://github.com/"
                                        linkedin="https://www.linkedin.com"
                                        mail="mailto:sanketnighot25@gmail.com"
                                    />
                                </a>
                            </div>
                            <div class="col">
                                <a href="https://github.com" target="_blank" style={{textDecoration: "none"}}>
                                    <MediaCard
                                        image="https://picsum.photos/99/99"
                                        name="Sanket Nighot"
                                        descrpiton="Lorem Ipsum is simply dummy text of the printing and 
                                                typesetting industry. Lorem Ipsum has been the industry's 
                                                standard dummy text ever since the 1500s, when an unknown 
                                                printer took a galley of type and scrambled it to make a 
                                                type specimen book. "
                                        github="https://github.com/"
                                        linkedin="https://www.linkedin.com"
                                        mail="mailto:sanketnighot25@gmail.com"
                                    />
                                </a>
                            </div>
                            <div class="col">
                                <a href="https://github.com" target="_blank" style={{textDecoration: "none"}}>
                                    <MediaCard
                                        image="https://picsum.photos/101/101"
                                        name="Rohit Suryawanshi"
                                        descrpiton="Lorem Ipsum is simply dummy text of the printing and 
                                                typesetting industry. Lorem Ipsum has been the industry's 
                                                standard dummy text ever since the 1500s, when an unknown 
                                                printer took a galley of type and scrambled it to make a 
                                                type specimen book. "
                                        github="https://github.com/"
                                        linkedin="https://www.linkedin.com"
                                        mail="mailto:sanketnighot25@gmail.com"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default About;