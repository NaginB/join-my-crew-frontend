import React from 'react'
import * as P from "./style";
import SliderImg1 from "../../Assets/Images/girlWallpaper.jpg";
import SliderImg2 from "../../Assets/Images/profileGirl.jpeg";
import SliderImg3 from "../../Assets/Images/profileGirl2.jpeg";

const PostSlider = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    appendDots: (dots: any) => (
      <ul>{dots}</ul>
    ),
    customPaging: (i: number) => (<P.Dot className="slider-dot"></P.Dot>)
  };

  return (
    <P.Slider {...settings}>
      <P.SliderContent >
        <P.PostImage src={SliderImg1} />
      </P.SliderContent>
      <P.SliderContent >
        <P.PostImage src={SliderImg2} />
      </P.SliderContent>
      <P.SliderContent >
        <P.PostImage src={SliderImg3} />
      </P.SliderContent>
    </P.Slider>
  )
}

export default PostSlider
