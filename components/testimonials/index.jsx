import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientBrand from "@/public/images/clientBrand.png";
import ClientImg from "@/public/images/client.png";
import NextArrowBlue from "@/public/icons/nextArrowBlue.svg";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <Image
      src={NextArrowBlue}
      alt=""
      onClick={onClick}
      className="absolute right-[10%] top-[15%] md:right-[30%] md:top-[24%] cursor-pointer"
    />
  );
};

const PrevArrow = () => {
  return <p className="hidden"></p>;
};

const index = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="bg-gray-200 mt-28 py-24">
      <div className="w-10/12 mx-auto container">
        <Slider {...settings}>
          <div className="text-center">
            <div className="flex items-center justify-center relative">
              <Image
                src={ClientBrand}
                alt=""
                className="w-5/12 sm:w-[27%] absolute -left-6 sm:left-[18%] sm:top-[18%] -z-10"
              />
              <Image src={ClientImg} alt="" className="w-10/12 sm:w-5/12" />
            </div>
            <div className="md:-mt-12">
              <p className="font-bold text-xxl">Luiza Andrighetto</p>
              <p className="text-gray-700">
                Gestora da Hípica TWZ - Porto Alegre RS
              </p>
            </div>
            <p className="text-lg sm:text-xl leading-[2.5] text-justify mt-7 md:mt-14">
              Organização é um importante valor da Escola TWZ e entendemos que
              está diretamente ligada ao desempenho dentro pistas, saúde dos
              nossos cavalos e na satisfação dos clientes.
              <strong>
                O sistema é intuitivo e muito visual, o que facilita muito o dia
                a dia, com poucos “clicks” é possível verificar estoque,
                financeiro, aulas, dados dos atletas e muito mais.
              </strong>
              Controlar remotamente a gestão da empresa está alinhado com o
              futuro corporativo – flexibilidade, autonomia, controle da sua
              empresa em qualquer lugar do mundo.
              <strong>
                O investimento realizado para implementação do sistema Equites
                com certeza vale a pena pelos resultados apresentados.
              </strong>
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <Image
                src={ClientBrand}
                alt=""
                className="w-[27%] h-[27%] -mr-[8%]"
              />
              <Image src={ClientImg} alt="" className="w-5/12 -ml-[8%]" />
            </div>
            <div className="md:-mt-12">
              <p className="font-bold text-xxl">Luiza Andrighetto</p>
              <p className="text-gray-700">
                Gestora da Hípica TWZ - Porto Alegre RS
              </p>
            </div>
            <p className="text-lg sm:text-xl leading-loose text-justify mt-7 md:mt-14">
              Organização é um importante valor da Escola TWZ e entendemos que
              está diretamente ligada ao desempenho dentro pistas, saúde dos
              nossos cavalos e na satisfação dos clientes.
              <strong>
                O sistema é intuitivo e muito visual, o que facilita muito o dia
                a dia, com poucos “clicks” é possível verificar estoque,
                financeiro, aulas, dados dos atletas e muito mais.
              </strong>
              Controlar remotamente a gestão da empresa está alinhado com o
              futuro corporativo – flexibilidade, autonomia, controle da sua
              empresa em qualquer lugar do mundo.
              <strong>
                O investimento realizado para implementação do sistema Equites
                com certeza vale a pena pelos resultados apresentados.
              </strong>
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default index;
