import { Fade } from "react-reveal";

const Description = ({ desTitle, desDes }) => {
  return (
    <div className="w-10/12 mx-auto text-center mt-24">
      <Fade bottom>
        <div className="w-full md:w-6/12 mx-auto">
          <p className="text-xxl text-green-500 font-semibold">{desTitle}</p>
          <p className="text-xl mt-1">{desDes}</p>
        </div>
      </Fade>
    </div>
  );
};

export default Description;
