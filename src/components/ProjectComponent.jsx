import { useEffect, useState } from "react";
import { Behance } from "../resources/Behance";
import ModulesComponent from "./ModulesComponent";

const ProjectComponent = ({ projectId }) => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    new Behance()
      .getProjectsById(projectId)
      .then((rep) => setProject(rep.project));
  }, [projectId]);

  return (
    <div className="modal">
      {project.id}
      {project.name}
      <ModulesComponent modules={project.modules}/>
    </div>
  );
};

export default ProjectComponent;
