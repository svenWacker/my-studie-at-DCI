const ToDos = (props) => {
  const userTodos = props.list.map((toDo, i) => (
    <li key={i}>
      <input
        class="checked"
        type="checkbox"
        defaultChecked={toDo.done}
        onChange={() => props.check(toDo.id)}
      />
      <span> {toDo.title}</span>
      <i
        onClick={() => {
          console.log(toDo.id);
          props.remove(toDo.id);
        }}
      >
        🗑
      </i>
    </li>
  ));
  return <ul>{userTodos}</ul>;
};

export default ToDos;
