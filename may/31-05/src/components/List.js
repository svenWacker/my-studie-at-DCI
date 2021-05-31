import { sub } from "../helpers";
import Item from "./Item";
const List = (props) => {
  return (
    <div>
      {sub(44, 3)}
      <Item print={props.print} />
    </div>
  );
};
export default List;
