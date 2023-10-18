import { motion } from "framer-motion";

const Button = ({ title, btnColor }) => {
  return (
    <a href="https://bemvindo.equites.com.br" target="blank">
      <motion.button
        whileTap={{
          scale: 0.9,
        }}
        className={`py-[13px] px-6 font-semibold rounded-lg ${
          btnColor === "green"
            ? "bg-green-500 shadow-green text-white"
            : "bg-white shadow-white text-green-500"
        }`}
      >
        {title}
      </motion.button>
    </a>
  );
};

export default Button;
