'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Controller, Autoplay, EffectFade, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import { useState, useEffect, useRef } from 'react';

const slides = [
  { img: "/soc.jpg" },
  { img: "/TH_H2820.jpeg" },
  { img: "/TH_H2800.jpeg" },
  { img: "/TH_H2794.jpeg" },
  { img: "/TH_H2760.jpeg" },
  { img: "/TH_H2697 CHí Hiếu - GO 30x45.jpeg" },
  { img: "/TH_H2648.jpeg" },
  { img: "/TH_H2641.jpeg" },
  { img: "/TH_H2626.jpeg" },
  { img: "/TH_H2530.jpeg" },
  { img: "/TH_H2497.jpeg" },
  { img: "/TH_H2485.jpeg" },
  { img: "/IMG_6120.jpeg" },
  { img: "/IMG_6119.jpeg" },
  { img: "/IMG_6118.jpeg" },
  { img: "/IMG_6076.jpeg" },
  { img: "/IMG_5715.jpeg" },
  { img: "/IMG_5656.jpeg" },
  { img: "/IMG_5641.jpeg" },
  { img: "/IMG_5633.jpeg" },
  { img: "/IMG_4450.jpeg" },
  { img: "/IMG_4449.jpeg" },
  { img: "/IMG_4448.jpeg" },
  { img: "/IMG_4447.jpeg" },
  { img: "/IMG_4446.jpeg" },
  { img: "/IMG_4445.jpeg" },
  { img: "/IMG_4444.jpeg" },
  { img: "/IMG_4443.jpeg" },
  { img: "/IMG_4442.jpeg" },
  { img: "/IMG_4441.jpeg" },
  { img: "/IMG_4440.jpeg" },
  { img: "/IMG_3586.jpeg" },
  { img: "/IMG_3584.jpeg" },
  { img: "/IMG_3581.jpeg" },
  { img: "/IMG_3578.jpeg" },
  { img: "/IMG_3577.jpeg" },
  { img: "/IMG_1994.jpeg" },
  { img: "/IMG_1984.jpeg" },
  { img: "/IMG_1983.jpeg" },
  { img: "/IMG_1978.jpeg" },
  { img: "/IMG_1977.jpeg" },
  { img: "/1I8MDKTJC_4IH7EN.jpeg" },
  { img: "/1HOOKFJL6_4IH7EN.jpeg" },
  { img: "/1HKG29RIF_4IH7EN.jpeg" },
  { img: "/1693890428306.jpeg" },
  { img: "/0E8A5519.jpeg" },
  { img: "/0E8A5518.jpeg" },
  { img: "/0E8A5514.jpeg" },
  { img: "/0E8A5497.jpeg" },
  { img: "/0E8A5493.jpeg" },
  { img: "/0E8A5427.jpeg" },
  { img: "/0E8A5424.jpeg" },
  { img: "/0E8A5401.jpeg" },
  { img: "/0E8A5305.jpeg" },
  { img: "/0E8A5289.jpeg" },
  { img: "/z6655146791945_e167a0fe26f5474f385e7a9322bac75b.jpg" },
  { img: "/z6627707120960_82ab3d6019c3e20d0cadd70bd9d8f67d.jpg" },
  { img: "/z6627707088697_486ac339527c66622a71d5399a274314.jpg" },
  { img: "/z6627707062236_6132aab5edb814345452cb2d44572dec.jpg" },
  { img: "/z6627706975093_abf241da445f867f52615e065c48a493.jpg" },
  { img: "/z6627706961210_24edb4f86c96d9e029f8c285a3c7299b.jpg" },
  { img: "/z6627706954849_6a85b0f84387b3e74326e43b4d3363e3.jpg" },
  { img: "/z6627706922495_63cac010babdb0b644cd4056a529a38a.jpg" },
  { img: "/z6627706899146_46ea0f67324d513759d5b7af00c25202.jpg" },
  { img: "/z6627706875908_72d8a1a2b28c7898fae3fff8bc6995df.jpg" },
  { img: "/z6627706872082_a0b88aa81dd11483fc080e9845968fef.jpg" },
  { img: "/z6627706864259_3d648d80b08a5bf8529b54f40ff4a5df.jpg" },
  { img: "/z6627706822929_fb09268832ef7b4e0fea8d525d2458ed.jpg" },
  { img: "/z6627356574179_f4e52d46487f11f3263d65b80d479d59.jpg" },
  { img: "/z6627241975056_04ddd4a5bf6c863a167af81d64ae4d36.jpg" },
  { img: "/z6626807909341_0fa265ec7c08942e4977a23ab66ca959.jpg" },
  { img: "/z6626795286474_43727c38b4daf4bb2060e4fdd7b5e3d9.jpg" },
  { img: "/z6626795210370_bac937bbc06692761d9a928743a9c81e.jpg" },
  { img: "/z6626795027712_82986d662c9e89ce4668fd72f56590f9.jpg" },
  { img: "/z6626794988358_df655eceef5ebece4a08c134ab9be1da.jpg" },
  { img: "/z6626794681565_68b703fd3ec147550d0c402ff5ee8bc3.jpg" },
  { img: "/z6626794496781_53715b8089f7eb694a8b0175ada6b7b8.jpg" },
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
