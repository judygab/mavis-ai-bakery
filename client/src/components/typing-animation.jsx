import { TypeAnimation } from "react-type-animation";

const AnimatedText = ({ text }) => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        text,
        1000, // wait 1s before replacing
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default AnimatedText;
