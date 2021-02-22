import React from 'react';
import {Container} from "react-bootstrap";

export default function AboutUs() {
    return (
        <section className="about-us">
            <div className="about-us__image-place">

            </div>
            <Container className="about-us__text-place">
               <article className="about-us__article">
                    <h2 className="about-us__h2">Lorem, ipsum dolor.</h2>
                    <p className="about-us__p">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Non nemo corrupti vero recusandae rerum, ea atque culpa animi sit enim.
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore at a,
                         quisquam ad eligendi voluptas minima quis animi hic.
                    </p>
                </article>
                   <div className="about-us__images-box">
                       <div className="about-us__image-box">
                           <img src="https://i.pinimg.com/originals/0a/e0/40/0ae04073e14048519a0e741ed1ffb415.jpg" alt="image" className="about-us__image"/>
                        </div>
                       <div className="about-us__image-box">
                           <img src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2800,w_4200,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/abejas-2_sycdc6.jpg" alt="image" className="about-us__image"/>
                       </div>
                       <div className="about-us__image-box">
                           <img src="https://legacylifeandstyle.files.wordpress.com/2014/09/dscf5119.jpg" alt="image" className="about-us__image"/>
                      </div>
                   </div>
                <article className="about-us__article">
                    <h2 className="about-us__h2">Lorem, ipsum dolor.</h2>
                    <p className="about-us__p">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Non nemo corrupti vero recusandae rerum, ea atque culpa animi sit enim.
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore at a,
                         quisquam ad eligendi voluptas minima quis animi hic.
                         Non nemo corrupti vero recusandae rerum, ea atque culpa animi sit enim.
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore at a,
                         quisquam ad eligendi voluptas minima quis animi hic.
                    </p>
                </article>
            </Container>   
        </section>
    )
}
