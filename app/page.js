'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Controller, Autoplay, EffectFade, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import { useState, useEffect, useRef } from 'react';

const slides = [
  { img: "/IMG_1983.jpeg" },
  { img: "/IMG_1984.jpeg" },
  { img: "/IMG_1978.jpeg" },
  { img: "/IMG_1977.jpeg" },
  { img: "/IMG_1994.jpeg" },
  { img: "/IMG_5641.jpeg" },
  { img: "/1I8MDKTJC_4IH7EN.jpeg" },
  { img: "/IMG_3578.jpeg" },
  { img: "/IMG_3577.jpeg" },
  { img: "/IMG_3584.jpeg" },
  { img: "/IMG_3586.jpeg" },
  { img: "/1HOOKFJL6_4IH7EN.jpeg" },
  { img: "/1HKG29RIF_4IH7EN.jpeg" },
  { img: "/IMG_3581.jpeg" },
  { img: "/IMG_5633.jpeg" },
  { img: "/IMG_6076.jpeg" },
  { img: "/IMG_5656.jpeg" },
  { img: "/IMG_6119.jpeg" },
  { img: "/IMG_6120.jpeg" },
  { img: "/IMG_6118.jpeg" },
  { img: "/TH_H2497.jpeg" },
  { img: "/TH_H2641.jpeg" },
  { img: "/TH_H2648.jpeg" },
  { img: "/IMG_4450.jpeg" },
  { img: "/IMG_4445.jpeg" },
  { img: "/IMG_4448.jpeg" },
  { img: "/IMG_4449.jpeg" },
  { img: "/IMG_4446.jpeg" },
  { img: "/IMG_4447.jpeg" },
  { img: "/TH_H2800.jpeg" },
  { img: "/TH_H2820.jpeg" },
  { img: "/TH_H2794.jpeg" },
  { img: "/TH_H2485.jpeg" },
  { img: "/TH_H2745.jpeg" },
  { img: "/TH_H2626.jpeg" },
  { img: "/TH_H2760.jpeg" },
  { img: "/TH_H2697 CHí Hiếu - GO 30x45.jpeg" },
  { img: "/TH_H2530.jpeg" },
  { img: "/0E8A5519.jpeg" },
  { img: "/0E8A5497.jpeg" },
  { img: "/0E8A5514.jpeg" },
  { img: "/0E8A5518.jpeg" },
  { img: "/0E8A5424.jpeg" },
  { img: "/0E8A5427.jpeg" },
  { img: "/0E8A5401.jpeg" },
  { img: "/0E8A5493.jpeg" },
];

const FLOWER_EMOJI = '🌸';
const FLOWER_COUNT = 8;

export default function Home() {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [navSwiper, setNavSwiper] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const audioRef = useRef();

  const handleOk = () => {
    setShowWelcome(false);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div
            className="p-[4px] rounded-[2.5rem] bg-gradient-to-r from-indigo-500 via-pink-400 to-pink-500"
            style={{ maxWidth: 600, width: '98vw' }}
          >
            <div className="bg-white/90 rounded-[2rem] shadow-2xl p-12 flex flex-col items-center">
              <span className="text-6xl md:text-7xl text-indigo-500 mb-4 drop-shadow-lg">🏠</span>
              <img src="/0E8A5401.jpeg" alt="Welcome" className="w-[500px] h-64 object-cover rounded-3xl shadow-2xl border-4 border-white mb-8" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center drop-shadow">
                <span className="text-pink-500">Cùng nhìn lại khoảnh khắc đáng yêu của chúng mình nhé</span>
              </h2>
              <button
                onClick={handleOk}
                className="px-12 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-2xl font-bold shadow-lg hover:scale-105 transition mt-2"
              >
                GO!
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="min-h-screen flex flex-col justify-between  overflow-hidden bg-gradient-to-br from-[#232143] via-[#2d2956] to-[#232143] px-2 md:px-0 py-10">
        <audio ref={audioRef} src="/listen.mp3" loop />
        {/* Swiper Section */}
        <main className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-6xl mx-auto">
            <Swiper
              modules={[Navigation, Controller, Autoplay]}
              onSwiper={setMainSwiper}
              controller={{ control: navSwiper }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              loop
              speed={800}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              centeredSlides
              slidesPerView={2}
              spaceBetween={-60}
              className="relative custom-gallery-swiper"
              style={{overflow: 'visible'}}
            >
              {slides.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex items-center justify-center h-[320px] md:h-[480px]">
                    <img
                      src={slide.img}
                      alt="slide"
                      className="gallery-img rounded-3xl shadow-2xl object-contain w-[340px] h-[320px] md:w-[520px] md:h-[480px] bg-[#232143] transition-all duration-500 border-4 border-[#2d2956] hover:scale-105 hover:shadow-3xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </main>
        <style jsx global>{`
          .custom-gallery-swiper .swiper-slide {
            filter: blur(0px);
            opacity: 1;
            transition: transform 0.5s, opacity 0.5s;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .custom-gallery-swiper .swiper-slide-active {
            transform: scale(1.7);
            z-index: 10;
            opacity: 1;
            box-shadow: 0 16px 64px 0 rgba(0,0,0,0.65);
          }
          .custom-gallery-swiper .swiper-slide-next,
          .custom-gallery-swiper .swiper-slide-prev {
            opacity: 0.5;
            transform: scale(0.7);
          }
          .custom-gallery-swiper .swiper-slide {
            overflow: visible;
          }
          .custom-gallery-swiper {
            overflow: visible !important;
          }
        `}</style>
      </div>
    </>
  );
}
