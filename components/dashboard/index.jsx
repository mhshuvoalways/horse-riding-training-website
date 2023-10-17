import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DashboardImg from "@/public/images/dashboard.png";
import ArrowLeft from "@/public/icons/arrowLeft.svg";
import ArrowRight from "@/public/icons/arrowRight.svg";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Image
      src={ArrowLeft}
      alt=""
      onClick={onClick}
      className="absolute left-0 top-[35%] sm:top-[45%] cursor-pointer z-50"
    />
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <Image
      src={ArrowRight}
      alt=""
      onClick={onClick}
      className="absolute right-0 top-[35%] sm:top-[45%] cursor-pointer z-50"
    />
  );
};

const index = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="bg-green-500 mt-14 pt-32 pb-20">
      <div className="w-10/12 mx-auto container">
        <p className="text-xxl sm:text-2xl font-bold text-white text-center">
          Conheça por dentro do Equites!
        </p>
        <Slider {...settings}>
          <div>
            <Image src={DashboardImg} alt="" />
            <p className="text-center text-xxl text-white opacity-90">
              Dashboard
            </p>
          </div>
          <div>
            <Image src={DashboardImg} alt="" />
            <p className="text-center text-xxl text-white opacity-90">
              Dashboard
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default index;
