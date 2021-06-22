import { useContext } from "react";
import { DataContext } from "../context";

const About = () => {
  const data = useContext(DataContext);
  return (
    <div>
      {data.map((item) => (
        <h1>
          {item.name} {item.emoji}
        </h1>
      ))}
    </div>
  );
};
export default About;
