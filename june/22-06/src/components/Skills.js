import { useContext } from "react";
import { DataContext } from "../context";

const Skills = () => {
  const data = useContext(DataContext);
  return (
    <div>
      <h1>Skills</h1>
      {data.map((item) => (
        <h1>{item.age}</h1>
      ))}
    </div>
  );
};
export default Skills;
