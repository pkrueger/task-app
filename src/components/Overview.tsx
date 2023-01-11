import React from "react";
import ITaskProp from "../interfaces/ITaskProp";

function Overview(props: ITaskProp) {
  const { tasks } = props;

  const elements = tasks.map((task) => <li>{task}</li>);

  return (
    <>
      <ul>{elements}</ul>
    </>
  );
}

export default Overview;
