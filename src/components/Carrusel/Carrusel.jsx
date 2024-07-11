"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import { dataCarrusel } from "./dataCarrusel";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// IMAGES DATA FOR CAROUSEL

// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1.01,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    },
                }
            ]
        };


        return (
          <section className='text-center' id="marcas">
              <article className="relative mx-auto max-w-2xl py-6 md:max-w-full xxl:py-12">
                  <div className="absolute inset-0 bg-[url('/bg/bg-marcas.webp')] bg-center opacity-80 z-0"></div>
                  <div className="relative z-10">
                      <Slider {...settings} className='flex items-center justify-center'>
                          {dataCarrusel.map((item, i) => (
                              <div key={i} className='flex items-center justify-center m-2 md:bg-lightpink gap-4'>
                                  <img src={item.imgSrc} alt={`Carousel image ${i + 1}`} width={165} height={165} className="w-auto h-32" loading="lazy"/>
                              </div>
                          ))}
                      </Slider>
                  </div>
              </article>
          </section>
      );
    }
}
