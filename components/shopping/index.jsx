import Image from "next/image";
import { Fade } from "react-reveal";
import Button from "../common/Button";
import BadgetIcon from "@/public/icons/badge.svg";
import TickRound from "@/public/icons/tickRound.svg";
import ShoppingImg from "@/public/images/shopping.png";

const index = () => {
  return (
    <div className="bg-background-dark pb-24">
      <Image src={BadgetIcon} alt="" className="w-6/12 md:w-3/12 pt-28" />
      <div className="w-10/12 mx-auto flex justify-between flex-wrap lg:flex-nowrap gap-16 lg:gap-24 container">
        <div className="w-full lg:w-5/12">
          <Fade bottom>
            <div className="mt-[100px]">
              <p className="text-green-500 text-2xl sm:text-[80px] font-bold leading-none">
                Equites Shopping
              </p>
              <p className="text-xl text-white mt-8">
                Que tal uma experiência de moda equina única para os verdadeiros
                amantes do hipismo?
              </p>
            </div>
            <div className="mt-[100px] space-y-6">
              <div className="flex items-center gap-5">
                <Image src={TickRound} alt="" className="w-20" />
                <p className="text-xxl font-bold text-white">
                  Estampas exclusivas
                </p>
              </div>
              <div className="flex items-center gap-5">
                <Image src={TickRound} alt="" className="w-20" />
                <p className="text-xxl font-bold text-white">Estilo único</p>
              </div>
              <div className="flex items-center gap-5">
                <Image src={TickRound} alt="" className="w-20" />
                <p className="text-xxl font-bold text-white">
                  O presente ideal
                </p>
              </div>
            </div>
            <div className="mt-20">
              <Button
                title="Conhecer mais do Equites Shopping"
                btnColor="green"
              />
            </div>
          </Fade>
        </div>
        <Fade bottom>
          <div>
            <Image src={ShoppingImg} alt="" className="w-full" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default index;
