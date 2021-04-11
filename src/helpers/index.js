import { collatedTasks } from "../constants/index";
export const collatedTasksExist = (selectedProject) => {
  collatedTasks.find((task) => task.key === selectedProject);
};

export const getCollatedTitle = (projects, key) =>
  projects.find((project) => project.key === key);

export const getTitle = (projects, projectId) =>
  projects.find((project) => project.projectId === projectId);
