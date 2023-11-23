import { Dashboard } from "./pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Createproject } from "./pages/CreateProject/Createproject"
import { ProjectProvider } from './components/ProjectContext';

function App() {
  return (
    <ProjectProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/createproject" element={<Createproject/>} />
        </Routes>
      </Router>
    </ProjectProvider>
  );
}

export default App;
