import './LookBookPage.scss'
import React from 'react'
import Slider from 'react-slick';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

export default function LookBookPage() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  let tagData = [
    'Sneackers', 'Trainers', 'Running', 'Outdoor and active wear', 'Sport', 'Casual', 'T-shirt', 'Clothing', 'Collection', 'Exclusive'
  ]
  return (
    <>
      <div className='lookbook-container'>
        <Header />
        <Breadcrumb />
        <div className='lookbook-content'>
          <div className='lookbook-content-1 col-10'>
            <div className='lookbook-image-1 col-10'><img src="../Image/img.png" alt="" /></div>
            <div className='lookbook-title col-8'>
              <div className='lookbook-title-h2 '>
                <h2>New</h2>
                <h2>Collection</h2>
              </div>
              <p>
                Truffaut chia PBR&B direct trade glossier fam slow-carb pop-up. XOXO food truck chartreuse crucifix cronut health goth. Edison bulb ramps tumblr kickstarter master cleanse beard seitan tattooed slow-carb biodiesel neutra tofu air plant tumeric asymmetrical
              </p>
            </div>
          </div>
          <div className='lookbook-content-2' >
            <Slider {...settings}>
              <div className='carousel'>
                <div className='carousel-image'><img src="../Image/11 (1).png" alt="" /></div>
              </div>
              <div className='carousel'>
                <div className='carousel-image'><img src="../Image/hdm0132012_bei_01.png" alt="" /></div>
              </div>
              <div className='carousel'>
                <div className='carousel-image'><img src="../Image/img.png" alt="" /></div>
              </div>
              <div className='carousel'>
                <div className='carousel-image'><img src="../Image/rig0328003_blk_05.png" alt="" /></div>
              </div>
            </Slider>
          </div>
          <div className='lookbook-content-3'>
            <div className='lb-content-3-1 col-10'>
              <div className='col-5'>
                <img className='col-10' src="../Image/11 (1).png" alt="" />
              </div>
              <div className='lb-content-3-text col-5'>
                <p>
                  Flannel waistcoat succulents enamel pin, actually beard williamsburg four loko scenester letterpress narwhal direct trade pinterest
                </p>
                <div className='lb-icon'>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-pinterest-p"></i>
                  <i class="fa-brands fa-whatsapp"></i>
                  <i class="fa-brands fa-snapchat"></i>
                </div>
              </div>
            </div>
            <div className='lb-content-3-2 col-10'>
              <div className='lb-button'>
                <button>Shop collection</button>
              </div>
              <div className='col-10'>
                <img className='col-10' src="../Image/hdm0132014_nav_01.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="lookbook-divide" />
        <div className="tag col-10">
          {tagData.map((item, i) => {
            return (
              <div className="tag-item">{item}</div>
            )
          })}
        </div>
        <Footer />
      </div>
    </>
  )
}
