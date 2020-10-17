import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './footer.css';
const Footer = () => {
  return (
    <footer>
    <div class="container">
        <div class="row ">
            <div class="col-md-4 text-center text-md-left ">
                
                <div class="py-0">
                    <h3 class="my-4 text-white">About<span class="mx-2 font-italic text-warning ">DrukBox</span></h3>
                    <p class="text-light py-4 mb-4">Copyright © 2020 All Rights Reserved by DrukBox.</p>
                </div>
            </div>
            
            <div class="col-md-4 text-white text-center text-md-left ">
                <div class="py-2 my-4">
                    <div>
                        <p class="text-white"> <i class="fa fa-map-marker mx-2 "></i>
                                Львівська політехніка,
                                корпус 4
                              </p>
                    </div>

                    <div> 
                        <p><i class="fa fa-phone  mx-2 "></i> +99 99-9999999</p>
                    </div>
                    <div>
                        <p><i class="fa fa-envelope  mx-2"></i><a href="mailto:example@gmail.com">example@gmail.com</a></p>
                    </div>  
                </div>  
            </div>
            
            <div class="col-md-4 text-white my-4 text-center text-md-left ">
                <span class=" font-weight-bold ">About us</span>
      <p class="text-warning my-2" >Text</p>
                <div class="py-2">
                    <a href="#"><i class="fab fa-facebook fa-2x text-primary mx-3"></i></a>
                    <a href="#"><i class="fab fa-google-plus fa-2x text-danger mx-3"></i></a>
                    <a href="#"><i class="fab fa-twitter fa-2x text-info mx-3"></i></a>
                    <a href="#"><i class="fab fa-youtube fa-2x text-danger mx-3"></i></a>
                </div>
            </div>
        </div>  
    </div>
 </footer>
  );
}

export default Footer;