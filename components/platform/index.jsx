import Image from "next/image";
import { Fade } from "react-reveal";
import Button from "../common/Button";
import ComputerImg from "@/public/images/computer.png";

const index = () => {
  return (
    <div className="bg-green-500 py-32 mt-24">
      <div className="w-10/12 mx-auto flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-5 md:gap-16 container items-center">
        <Image src={ComputerImg} alt="" className="w-full sm:w-6/12" />
        <Fade bottom>
          <div>
            <p className="text-white text-xl sm:text-2xl mb-14 leading-tight">
              Uma plataforma completa, com tudo que você precisa para uma rotina
              hípica organizada Quero ser Equites!
            </p>
            <Button title="Quero ser Equites!" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default index;
