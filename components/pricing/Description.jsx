import { Fade } from "react-reveal";

const Description = () => {
  return (
    <div className="w-10/12 mx-auto text-center mt-24">
      <Fade bottom>
        <div className="w-full md:w-8/12 mx-auto bg-green-500 rounded-3xl px-10 md:px-20 py-5 md:py-10">
          <p className="text-xl sm:text-xxl text-white font-semibold">
            A gestão inteligente do seu mundo equestre começa aqui!
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Description;
