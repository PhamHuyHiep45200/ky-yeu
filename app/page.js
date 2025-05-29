'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Controller, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
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

function FlowerRain() {
  const [flowers, setFlowers] = useState([]);
  const containerRef = useRef();

  useEffect(() => {
    // Khởi tạo hoa với vị trí và tốc độ random
    const genFlowers = () => Array.from({ length: FLOWER_COUNT }).map((_, i) => ({
      id: i + '-' + Math.random(),
      left: Math.random() * 100, // %
      size: 24 + Math.random() * 24, // px
      duration: 10 + Math.random() * 8, // s (10-18s)
      delay: Math.random() * 8, // s (0-8s)
      rotate: Math.random() * 360,
      opacity: 0.7 + Math.random() * 0.3,
    }));
    setFlowers(genFlowers());
    // Lặp lại hiệu ứng hoa rơi
    const interval = setInterval(() => setFlowers(genFlowers()), 16000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-50 w-full h-full overflow-hidden select-none">
      {flowers.map(flower => (
        <span
          key={flower.id}
          style={{
            left: `${flower.left}%`,
            fontSize: `${flower.size}px`,
            animation: `flower-fall ${flower.duration}s linear ${flower.delay}s infinite`,
            transform: `rotate(${flower.rotate}deg)`
          }}
          className="absolute top-[-10%] opacity-80"
        >
          {FLOWER_EMOJI}
        </span>
      ))}
      <style>{`
        @keyframes flower-fall {
          0% {
            top: -10%;
            opacity: 0.8;
            filter: blur(0px);
          }
          80% {
            filter: blur(1.5px);
            opacity: 0.8;
          }
          100% {
            top: 110%;
            opacity: 0.2;
            filter: blur(2px);
          }
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [navSwiper, setNavSwiper] = useState(null);

  return (
    <>
      <FlowerRain />
      <div className="flex w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 items-center justify-center p-2 sm:p-4">
        <div className="w-full h-[92vh] flex shadow-2xl rounded-2xl overflow-hidden">
          <Swiper
            modules={[Navigation, Controller, Autoplay, EffectFade]}
            onSwiper={setMainSwiper}
            controller={{ control: navSwiper }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            loop
            speed={1200}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            className="w-[75vw] h-full relative"
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={slide.img}
                  alt="slide"
                  className="w-full h-full object-contain object-center rounded-l-2xl transition-all duration-700 ease-in-out"
                />
              </SwiperSlide>
            ))}
            <div className="select-none swiper-button-prev !text-white !bg-black/40 !rounded-full !w-12 !h-12 !flex !items-center !justify-center !shadow-lg hover:!bg-white/80 hover:!text-black transition absolute top-1/2 -translate-y-1/2 left-4 z-20" />
            <div className="select-none swiper-button-next !text-white !bg-black/40 !rounded-full !w-12 !h-12 !flex !items-center !justify-center !shadow-lg hover:!bg-white/80 hover:!text-black transition absolute top-1/2 -translate-y-1/2 right-4 z-20" />
          </Swiper>
          <div className="w-[25vw] h-full flex flex-col items-center justify-center bg-black/40 rounded-r-2xl">
            <Swiper
              modules={[Controller]}
              onSwiper={setNavSwiper}
              controller={{ control: mainSwiper }}
              direction="vertical"
              slidesPerView={4}
              spaceBetween={32}
              centeredSlides
              slideToClickedSlide
              className="h-[92%] w-full"
              style={{ minWidth: 180 }}
            >
              {slides.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="w-full flex items-center justify-center">
                    <img
                      src={slide.img}
                      alt="slide nav"
                      className="w-32 h-32 rounded-3xl object-cover object-center shadow-2xl border-4 border-white transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:border-yellow-400 cursor-pointer"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
