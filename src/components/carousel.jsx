import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CarouselPage() {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 10000,
        min: 1024,
      },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <Carousel
        autoPlay={true}
        arrows
        autoPlaySpeed={2000}
        centerMode={false}
        className=""
        // containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable>
        <img
          src="/img/Aktsiya4.jpg"
          className="md:h-[681px] object-fill w-[inherit]"
        />
        <img
          src="/img/Aktsiya2.jpg"
          className="md:h-[681px] object-fill w-[inherit]"
        />
        <img
          src="/img/Aktsiya3.jpg"
          className="md:h-[681px] object-fill w-[inherit]"
        />
        <img
          src="/img/Aktsiya1.jpg"
          className="md:h-[681px] object-fill w-[inherit]"
        />
      </Carousel>
    </div>
  );
}

export default CarouselPage;
