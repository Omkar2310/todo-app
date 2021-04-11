import React, { useState } from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendar,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { Projects } from "../Projects";
import { AddProject } from "../AddProject";
import { useSelectedProjectValue, useProjectsValue } from "../../context";

export const SideBar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState("inbox");
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-test-id="sidebar">
      <ul className="sidebar_generic">
        <li data-testid="inbox" className="inbox">
          <span>
            <FaInbox />
          </span>
          &nbsp;&nbsp;&nbsp;
          <span>Inbox</span>
        </li>
        <li data-testid="today" className="today">
          <span>
            <FaRegCalendar />
          </span>
          &nbsp;&nbsp;&nbsp;
          <span>Today</span>
        </li>
        <li data-testid="next_7" className="next_7">
          <span>
            <FaRegCalendarAlt />
          </span>
          &nbsp;&nbsp;&nbsp;
          <span>Next 7 days!!</span>
        </li>
      </ul>
      <div className="sidbar_middle">
        <span>
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar_projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </div>
  );
};
