import Button from "./Button";

const usedTools = [
  "Tailwind",
  "useRef",
  "forwardRef",
  "useImperativeHandle",
  "createPortal",
  "etc...",
];

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectID,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl relative">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone:200">
        Your Projects!
      </h2>
      <Button onClick={onStartAddProject}>+ Add Project</Button>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 pt-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (project.id === selectedProjectID) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="absolute bottom-10 w-4/5">
        <p className="text-sm">In this project the next tools was used:</p>
        <ul className="mt-5">
          {usedTools.map((tool) => (
            <li key={Math.random()} className="text-xs">
              {tool}
            </li>
          ))}
        </ul>
        <p className="text-sm mt-5">Mykola Rybaruk© 2023</p>
      </div>
    </aside>
  );
}
