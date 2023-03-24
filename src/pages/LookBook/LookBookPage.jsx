import './LookBookPage.scss'
import React from 'react'
import Slider from 'react-slick';



export default function LookBookPage() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    // autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className='look-book-page'>
      <div className='routing'>
        <div>home</div>
        <div><i class="fa-solid fa-angle-right"></i></div>
        <div>Lookbook</div>
      </div>
      <div className='lookbook-title-image'>
        <div className='lookbook-image'><img src="../Image/img.png" alt="" /></div>
        <div className='look-book-title'>
          <h2>New collection</h2>
          <p>
            Truffaut chia PBR&B direct trade glossier fam slow-carb pop-up. XOXO food truck chartreuse crucifix cronut health goth. Edison bulb ramps tumblr kickstarter master cleanse beard seitan tattooed slow-carb biodiesel neutra tofu air plant tumeric asymmetrical
          </p>
        </div>
      </div>


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

      <div className='images1'><img src="../Image/11 (1).png" alt="" /></div>
      <div className='images2'><img src="../Image/hdm0132014_nav_01.png" alt="" /></div>

      <div className='block_2'>
        <div className='butn-text-icon'>
          <div className='butn'><button>Shop collection</button></div>
          <div className='text'>
            <p>
              Flannel waistcoat succulents enamel pin, actually beard williamsburg four loko scenester letterpress narwhal direct trade pinterest
            </p>
          </div>
          <div className='icon'>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-pinterest-p"></i>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-snapchat"></i>
          </div>
        </div>
      </div>


      <div className='tags-childlinks'>
        <div>Sneackers</div>
        <div>Trainers</div>
        <div>Running</div>
        <div>Outdoor and active wear</div>
        <div>Sport</div>
        <div>Casual</div>
        <div>T-shirt</div>
        <div>Clothing</div>
        <div>Shoe</div>
        <div>Collection</div>
        <div>Sale</div>
        <div>Exclusive</div>
      </div>
    </div>
  )
}
