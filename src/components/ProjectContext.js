import React, { createContext, useContext, useState } from 'react';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projectData, setProjectData] = useState(null);

  const saveProjectData = (data) => {
    setProjectData(data);
  };

  const getProjectData = () => {
    return projectData;
  };

  return (
    <ProjectContext.Provider value={{ saveProjectData, getProjectData }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
    const context = useContext(ProjectContext);
  
    if (!context) {
      throw new Error('useProjectContext must be used within a ProjectProvider');
    }
  
    return context;
  };
  
  export const GetSavedProjectData = () => {
    const context = useContext(ProjectContext);
  
    if (!context) {
      throw new Error('useProjectContext must be used within a ProjectProvider');
    }
  
    return context.getProjectData();
  };

