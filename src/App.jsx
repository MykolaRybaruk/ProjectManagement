import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [propjectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartNewProjest() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;

  if (propjectsState.selectedProjectId === null) {
    content = <NewProject />
  } else if (propjectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartNewProjest} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartNewProjest} />
      {content}
    </main>
  );
}

export default App;