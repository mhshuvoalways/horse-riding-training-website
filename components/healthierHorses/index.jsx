import { Fade } from "react-reveal";
import Button from "../common/Button";

const index = () => {
  return (
    <div className="h-[140vh] bg-cover healthierhorses flex justify-center items-center relative mt-24">
      <p className="bg-white opacity-90 md:opacity-0 absolute inset-0 z-0"></p>
      <div className="w-10/12 mx-auto container z-10">
        <div className="w-full md:w-5/12 ml-auto">
          <Fade bottom>
            <p className="text-green-500 text-xxl md:text-[65px] leading-tight font-bold">
              Cavalos mais saudáveis, alunos mais felizes, e você no controle.
            </p>
            <div className="mt-7">
              <Button title="Me cadastrar grátis" btnColor="green" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default index;
