import Image from "next/image";
import { Fade } from "react-reveal";
import Tick from "@/public/icons/tick.svg";
import Crown from "@/public/icons/crown.svg";

const index = () => {
  return (
    <div className="w-10/12 mx-auto pt-24">
      <p className="text-green-500 font-semibold text-2xl text-center">
        Planos e preços
      </p>
      <div className="mt-14 sm:mt-28 flex flex-wrap md:flex-nowrap justify-center gap-5 md:gap-16">
        <Fade bottom>
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-16 w-full md:w-5/12 relative">
            <p className="font-bold text-center text-xxl">Plano Mirim</p>
            <div className="space-y-2">
              <div className="flex gap-5 mt-[68px]">
                <Image src={Tick} alt="" className="w-5 sm:w-7" />
                <p className="text-lg sm:text-xl font-bold text-black-300">3 cavalos</p>
              </div>
              <div className="flex gap-5 mt-[68px]">
                <Image src={Tick} alt="" className="w-5 sm:w-7" />
                <p className="text-lg sm:text-xl font-bold text-black-300">3 alunos</p>
              </div>
              <div className="flex gap-5 mt-[68px]">
                <Image src={Tick} alt="" className="w-5 sm:w-7" />
                <p className="text-lg sm:text-xl font-bold text-black-300">3 cavalos</p>
              </div>
              <div className="flex gap-5 mt-[68px]">
                <Image src={Tick} alt="" className="w-5 sm:w-7" />
                <p className="text-lg sm:text-xl font-bold text-black-300">1 professor</p>
              </div>
              <div className="flex gap-5 mt-[68px]">
                <Image src={Tick} alt="" className="w-5 sm:w-7" />
                <p className="text-lg sm:text-xl font-bold text-black-300">
                  Gestão Financeira Básica
                </p>
              </div>
              <div className="flex gap-5 mt-[68px]">
                <Image src={Tick} alt="" className="w-5 sm:w-7" />
                <p className="text-lg sm:text-xl font-bold text-black-300">
                  Manejo de Cavalos
                </p>
              </div>
              <div className="flex gap-5 mt-[68px]">
                <Image src={Tick} alt="" className="w-5 sm:w-7" />
                <p className="text-lg sm:text-xl font-bold text-black-300">Suporte</p>
              </div>
              <div className="flex gap-5 mt-[68px]">
                <Image src={Tick} alt="" className="w-5 sm:w-7" />
                <p className="text-lg sm:text-xl font-bold text-black-300">
                  Acesso gratuito na plataforma ao fazer login
                </p>
              </div>
            </div>
            <p className="text-green-500 text-center font-bold text-2xl mt-20">
              Grátis
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl w-full md:w-6/12 relative">
            <Image src={Crown} alt="" className="mx-auto mt-5" />
            <div className="p-8 sm:px-16 pt-5">
              <p className="font-bold text-center text-xxl">Plano Sênior</p>
              <div className="space-y-2">
                <div className="flex gap-5 mt-[68px]">
                  <Image src={Tick} alt="" className="w-5 sm:w-7" />
                  <p className="text-lg sm:text-xl font-bold text-black-300">
                    Cavalos ilimitados
                  </p>
                </div>
                <div className="flex gap-5 mt-[68px]">
                  <Image src={Tick} alt="" className="w-5 sm:w-7" />
                  <p className="text-lg sm:text-xl font-bold text-black-300">
                    Alunos ilimitados
                  </p>
                </div>
                <div className="flex gap-5 mt-[68px]">
                  <Image src={Tick} alt="" className="w-5 sm:w-7" />
                  <p className="text-lg sm:text-xl font-bold text-black-300">
                    Professores ilimitados
                  </p>
                </div>
                <div className="flex gap-5 mt-[68px]">
                  <Image src={Tick} alt="" className="w-5 sm:w-7" />
                  <p className="text-lg sm:text-xl font-bold text-black-300">
                    Gestão Financeira Avançada
                  </p>
                </div>
                <div className="flex gap-5 mt-[68px]">
                  <Image src={Tick} alt="" className="w-5 sm:w-7" />
                  <p className="text-lg sm:text-xl font-bold text-black-300">
                    Manejo de Cavalos
                  </p>
                </div>
                <div className="flex gap-5 mt-[68px]">
                  <Image src={Tick} alt="" className="w-5 sm:w-7" />
                  <p className="text-lg sm:text-xl font-bold text-black-300">
                    Suporte Premium
                  </p>
                </div>
                <div className="flex gap-5 mt-[68px]">
                  <Image src={Tick} alt="" className="w-5 sm:w-7" />
                  <p className="text-lg sm:text-xl font-bold text-black-300">
                    Pagamentos anuais, semestrais, trimestrais ou mensais
                  </p>
                </div>
              </div>
              <p className="text-gray-500 text-center text-xl mt-[72px]">
                A partir de
              </p>
              <div className="text-green-500 flex justify-center">
                <p className="font-bold text-2xl">R$ 255</p>
                <p className="font-bold text-xl pt-6">/mês</p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default index;
