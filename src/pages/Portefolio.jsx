import { useEffect, useState } from "react";
import ProjectComponent from "../components/ProjectComponent";
import { Behance } from "../resources/Behance";

const Portefolio = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    new Behance().getProjectsByUser().then((rep) => setProject(rep.projects));
  }, []);

  return (
    <section id="portefolio_section">
      <h2>Le Portefolio</h2>
      <div id="project_container">
        <div id="presentation_project">
          {project.map((e, index) => (
            <a href={e.url} key={index} target="_blank">
              <img src={e.covers.original} alt={e.slug} />
            </a>
          ))}
        </div>
      </div>
      <ProjectComponent projectId={135384689} />
    </section>
  );
};

export default Portefolio;
