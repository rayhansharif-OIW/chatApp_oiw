"use client"
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const TestimonialSlider = () => {
  const reviews = [
    {
      name: "Courtney Henry",
      company: "Microsoft Corp",
      avatar: "images/users/user-5.png",
      text: "Our platform dfdf sdfsdfsd dsfdsfsd helps build secure onboarding authentica experiences & engage your users. We build.",
      rating: 4,
    },
    {
      name: "Ronald Richards",
      company: "Meta Limited",
      avatar: "images/users/user-2.png",
      text: "Our platform helps bufdsf dfdsfsd dsfdsfsd dsfdsfs sdfdsf sdfds ild secure onboarding authentica experiences & engage your users. We build.",
      rating: 4,
    },
    {
      name: "Bessie Cooper",
      company: "Apple Inc Ltd",
      avatar: "images/users/user-6.png",
      text: "Our platform helps build secure onboarding authentica experiences & engage your users. We build.",
      rating: 4,
    },
    {
      name: "Jane Doe",
      company: "Tesla Inc",
      avatar: "images/users/user-7.png",
      text: "An amazing platform that simplifies our processes and ensures security.",
      rating: 5,
    },
    {
      name: "John Smith",
      company: "Amazon",
      avatar: "images/users/user-8.png",
      text: "Efficient and easy to use. dasasdf sadasdsa sadsadsa sadsads sadsadsa sadsa sadsa recommend!",
      rating: 5,
    },
  ];

  return (
    <section className="reviews">
      <div className="container">
        <div className="row justify-between">
          <div className="lg:col-6">
            <h2>Our customers have nice things to say about us</h2>
          </div>
          <div className="lg:col-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              egestas Werat viverra id et aliquet. vulputate egestas
              sollicitudin.
            </p>
          </div>
        </div>
        <div className="row mt-10">
          <div className="col-12">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="reviews-carousel"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="review flex flex-col items-center p-6 bg-white rounded-lg shadow-lg h-[400px]">
                    {/* Avatar */}
                    <div className="review-author-avatar bg-gradient mb-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className=" rounded-full"
                      />
                    </div>
                    {/* Name and Company */}
                    <h4 className="mb-2 text-lg font-semibold">{review.name}</h4>
                    <p className="mb-4 text-sm text-[#666]">{review.company}</p>
                    {/* Review Text */}
                    <p className="flex-grow text-center text-sm text-gray-700">
                      {review.text}
                    </p>
                    {/* Rating */}
                    <div className="review-rating mt-6 flex items-center justify-center space-x-2.5">
                      {[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          src={
                            i < review.rating
                              ? "images/icons/star.svg"
                              : "images/icons/star-white.svg"
                          }
                          alt="star"
                          className="w-5 h-5"
                        />
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;