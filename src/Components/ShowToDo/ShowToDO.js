import React, { useEffect, useState } from "react";
import classnames from "classnames";
import "./ShowToDo.scss";

const ShowToDo = (props) => {
  const [toDoList, setToDoList] = useState(null);
  useEffect(() => {
    setToDoList(props.toDoList);
  }, [props.toDoList]);
  const toDoCompletionStatus = (toDoIndex) => {
    
    let newToDOList = [...toDoList];
    newToDOList = newToDOList.map((toDo, index) => {
        if(toDoIndex === index){
            return {
                task: toDo.task,
                isComplete:!toDo.isComplete,
              }
        }
        else{
            return toDo
        }
      ;
    });
     localStorage.setItem("toDo",JSON.stringify(newToDOList))
    setToDoList(newToDOList);
  };
  return toDoList && toDoList.length ? (
    <div className="toDo-list">
      <h2>
        ToDo List (Total ToDos remaining{" "}
        {toDoList.filter(item=>item.isComplete === false ).length} out of{" "}
        {toDoList.length})
      </h2>
      <ul>
        {toDoList.map((item, index) => (
          <li className="each-toDo" onClick={() => toDoCompletionStatus(index)} key={`bcc-${item.task}`}>
            <span className={classnames({ "strike-through": item.isComplete })}>
              {item.task}
            </span>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default ShowToDo;
