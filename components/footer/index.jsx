import Image from "next/image";
import { Fade } from "react-reveal";
import Button from "../common/Button";
import Logo from "@/public/images/logo.png";
import Instagram from "@/public/icons/instagram.svg";
import Facebook from "@/public/icons/facebook.svg";
import Youtube from "@/public/icons/youtube.svg";

const index = () => {
  return (
    <div className="bg-green-500 py-14">
      <div className="w-10/12 mx-auto">
        <div className="flex sm:justify-between justify-center flex-wrap gap-5 items-center">
          <Fade bottom>
            <small className="text-white">©2023 Equites</small>
            <Image src={Logo} alt="" className="w-36" />
            <Button title="Acessar o Equites!" />
          </Fade>
        </div>
        <p className="border mt-16 mb-6" />
        <div className="flex items-center flex-wrap justify-center sm:justify-between gap-10">
          <div className="flex items-center flex-wrap justify-center sm:justify-between text-white gap-3 md:gap-8">
            <small>Início</small>
            <small>Sobre</small>
            <small>Benefícios</small>
            <small>Por dentro da plataforma</small>
            <small>Depoimentos</small>
            <small>Planos e preços</small>
            <small>Equites Shopping</small>
          </div>
          <div className="flex items-center flex-wrap justify-center sm:justify-between text-green-50 gap-3 md:gap-8">
            <small>Privacidade</small>
            <small>Termos</small>
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 mt-16 flex-wrap">
          <Image src={Instagram} alt="" />
          <Image src={Facebook} alt="" />
          <Image src={Youtube} alt="" />
        </div>
      </div>
    </div>
  );
};

export default index;
