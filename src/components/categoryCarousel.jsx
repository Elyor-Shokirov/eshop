import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function CategoryCarousel() {
  const { data, isPending, error } = useFetch(
    "https://dummyjson.com/products/categories"
  );

  console.log(data);
  const responsive = {
    desktop: {
      breakpoint: {
        max: 10000,
        min: 1024,
      },
      items: 9,
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

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      {data && data.length > 0 && (
        <Carousel
          autoPlay={true}
          arrows={true}
          autoPlaySpeed={2000}
          centerMode={true}
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
          rewindWithAnimation={true}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable>
          {data.map((item) => (
            <Link to={`/categoryproducts/${item.slug}`} key={data.slug}>
              <div>
                <div className="flex flex-col justify-center items-center">
                  <div className="p-7  ">
                    <img
                      src={`/img/${item.slug}.jpg`}
                      alt=""
                      className="w-[200px] h-[200px] object-cover rounded-full border-2 border-[#523d7b] shadow-xl"
                    />
                  </div>
                  <p className="font-monserat font-bold">{item.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default CategoryCarousel;
