
import './App.css';
import CreateProject from './components/Project/CreateProject';
import { DeleteProject } from './components/Project/DeleteProject';
import { ReadProject } from './components/Project/ReadProject';
import { UpdateProject } from './components/Project/UpdateProject';

function App() {
  return (
    <div >
      <ReadProject></ReadProject>
      <CreateProject></CreateProject>
      <DeleteProject></DeleteProject>
      <UpdateProject></UpdateProject>
     
    </div>
  );
}

export default App;
