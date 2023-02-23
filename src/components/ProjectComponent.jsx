import { useEffect, useState } from "react";
import { Behance } from "../resources/Behance";

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
    </div>
  );
};

export default ProjectComponent;
