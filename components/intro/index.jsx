import { Fade } from "react-reveal";
import Button from "../common/Button";

const index = () => {
  return (
    <div className="h-[120vh] bg-cover intro flex justify-center items-center relative">
      <p className="bg-white opacity-90 md:opacity-0 absolute inset-0 z-0"></p>
      <div className="w-10/12 mx-auto container z-10">
        <div className="w-full md:w-5/12 ml-auto">
          <Fade bottom>
            <p className="text-green-500 text-xxl md:text-[65px] font-bold leading-tight">
              Gerir sua rotina hípica nunca foi tão fácil
            </p>
            <p className="text-xl mt-4">
              Equites - A sua plataforma projetada especialmente para o esporte
              Equestre
            </p>
            <div className="mt-10">
              <Button title="Me cadastrar grátis" btnColor="green" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default index;
