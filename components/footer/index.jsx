import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-reveal";
import { Link as ScrollLink, animateScroll } from "react-scroll";
import Button from "../common/Button";
import Logo from "@/public/images/logo.png";
import Instagram from "@/public/icons/instagram.svg";
import Facebook from "@/public/icons/facebook.svg";
import Youtube from "@/public/icons/youtube.svg";

const index = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <div className="bg-green-500 py-14">
      <div className="w-10/12 mx-auto">
        <div className="sm:flex sm:justify-between justify-center flex-wrap gap-5 items-center hidden">
          <Fade bottom>
            <small className="text-white">©2023 Equites</small>
            <Image src={Logo} alt="" className="w-36" />
            <Button title="Acessar o Equites!" />
          </Fade>
        </div>
        <div className="block sm:hidden">
          <Fade bottom>
            <Image src={Logo} alt="" className="w-36 mx-auto" />
            <div className="flex sm:justify-between justify-center flex-wrap gap-5 items-center mt-5">
              <small className="text-white">©2023 Equites</small>
              <Button title="Acessar o Equites!" />
            </div>
          </Fade>
        </div>
        <p className="border mt-16 mb-6" />
        <div className="flex items-center flex-wrap justify-center sm:justify-between gap-10">
          <div className="flex items-center flex-wrap justify-center sm:justify-between text-white gap-3 md:gap-8">
            <small onClick={scrollToTop} className="cursor-pointer">
              Início
            </small>
            <ScrollLink
              to="Sobre"
              smooth={true}
              className="cursor-pointer"
              offset={-50}
            >
              <small>Sobre</small>
            </ScrollLink>
            <ScrollLink
              to="Benefícios"
              smooth={true}
              className="cursor-pointer"
              offset={-50}
            >
              <small>Benefícios</small>
            </ScrollLink>
            <ScrollLink
              to="Por dentro da plataforma"
              smooth={true}
              className="cursor-pointer"
              offset={50}
            >
              <small>Por dentro da plataforma</small>
            </ScrollLink>
            <ScrollLink
              to="Depoimentos"
              smooth={true}
              className="cursor-pointer"
              offset={50}
            >
              <small>Depoimentos</small>
            </ScrollLink>
            <ScrollLink
              to="Depoimentos"
              smooth={true}
              className="cursor-pointer"
              offset={50}
            >
              <small>Planos e preços</small>
            </ScrollLink>
            <ScrollLink
              to="Equites Shopping"
              smooth={true}
              className="cursor-pointer"
            >
              <small>Equites Shopping</small>
            </ScrollLink>
          </div>
          <div className="flex items-center flex-wrap justify-center sm:justify-between text-green-50 gap-3 md:gap-8">
            <Link href="/privacidade">
              <small>Privacidade</small>
            </Link>
            <Link href="/termos">
              <small>Termos</small>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 mt-16 flex-wrap">
          <a href="https://www.instagram.com" target="blank">
            <Image src={Instagram} alt="" />
          </a>
          <a href="https://www.facebook.com" target="blank">
            <Image src={Facebook} alt="" />
          </a>
          <a href="https://youtube.com" target="blank">
            <Image src={Youtube} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
