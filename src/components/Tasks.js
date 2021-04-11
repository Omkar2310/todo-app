import React from "react";
import { Checkbox } from "./Checkbox";
import { useTasks } from "../hooks/index";
import { collatedTasksExist, getTitle, getCollatedTitle } from "../helpers";
import { collatedTasks } from "../constants";
export const Tasks = () => {
  const { tasks } = useTasks("1");

  // console.log(tasks);

  let projectName = "";

  return (
    <div className="tasks" data-test-id="tasks">
      <h2 data-test-id="project-name">{projectName}</h2>

      <ul className="task__list">
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
