import React from 'react';
// import styles from './.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import welcome_img from '../../images/welcome_img.png';
import contact_img from '../../images/contact_img.png';
import infor_img from '../../images/infor_img.jpg';


const Carousel=()=>{
    return(
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={welcome_img} className="d-block w-100" alt=""></img>
                </div>
                <div className="carousel-item">
                <img src={infor_img} className="d-block w-100" alt=""></img>
                </div>
                <div className="carousel-item">
                <img src={contact_img} className="d-block w-100" alt="..."></img>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      


    )
}

export default Carousel;