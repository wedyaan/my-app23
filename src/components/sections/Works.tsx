// Works.tsx - ULTRA SIMPLE VERSION FOR TESTING
 import { projects } from "../../constants";
import { TProject } from "../../types";
import { FiExternalLink } from "react-icons/fi"; // Import link icon


const ProjectCard: React.FC<TProject> = ({
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <div className="w-full bg-tertiary rounded-2xl p-5">
      <div className="relative h-[230px] w-full">
        <img
          src={image}
          alt={name}
          className="h-full w-full rounded-2xl object-cover"
        />
        <div className="absolute top-3 right-3">
          <button
            onClick={() => window.open(sourceCodeLink, "_blank")}
            className="bg-black rounded-full p-2 w-10 h-10"
          >
            <FiExternalLink className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-white text-xl font-bold">{name}</h3>
        <p className="text-secondary mt-2 text-sm">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag.name} className={`text-sm ${tag.color}`}>
            #{tag.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-white text-3xl font-bold mb-10">My Works</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Works;