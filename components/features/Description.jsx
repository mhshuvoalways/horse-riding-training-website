import { Fade } from "react-reveal";

const Description = () => {
  return (
    <div className="feature-description bg-cover mt-24 py-[151px]">
      <div className="w-10/12 mx-auto container">
        <Fade bottom>
          <p className="w-full sm:w-8/12 mx-auto text-center text-xl sm:text-xxl font-semibold">
            Facilite a rotina da sua hípica com processos automatizados: desde o
            agendamento das aulas até a alimentação dos cavalos.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default Description;
