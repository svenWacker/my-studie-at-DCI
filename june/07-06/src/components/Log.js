const Log = ({ setLog, log }) => {
  //   console.log(log);
  const changeLog = () => {
    log ? setLog(false) : setLog(true);
  };
  return (
    <div>
      <button onClick={changeLog}>Change Log</button>
      <h3>State of log: {log.toString()}</h3>
    </div>
  );
};

export default Log;
