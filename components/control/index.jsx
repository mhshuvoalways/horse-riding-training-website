import Image from "next/image";
import { Fade } from "react-reveal";
import MobileImg from "@/public/images/mobile.png";

const index = () => {
  return (
    <div className="w-10/12 mx-auto container relative">
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-10 lg:gap-20">
        <div className="w-full lg:w-[30%] pt-24 pb-20">
          <Fade bottom>
            <p className="text-green-500 font-bold text-2xl sm:text-[65px] leading-tight">
              Sob a palma da sua mão
            </p>
            <p className="font-bold text-xl text-black-400 mt-8">
              Acesse o Equites de qualquer lugar com seu celular ou tablet! Com
              apenas alguns cliques, controle alunos, professores, aulas,
              cavalos, caixa e
            </p>
            <p className="font-bold text-xxl text-black-400 mt-4">
              +70 funcionalidades!
            </p>
          </Fade>
        </div>
        <Image
          src={MobileImg}
          alt=""
          className="w-8/12 mx-auto lg:w-6/12 static lg:absolute right-0 -top-[10%]"
        />
      </div>
    </div>
  );
};

export default index;
