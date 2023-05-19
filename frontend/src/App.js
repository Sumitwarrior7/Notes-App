import { Routes, Route} from 'react-router-dom'
import Header from "./components/header";
import NotesListPage from "./pages/NotesListPage";
import IndividualNote from './pages/individualNote';
import CreateNotePage from './pages/createNotePage';


function App() {
  return (
    <div className="App" style={{backgroundColor:"#FFD369"}}>
      <Header />

      <Routes>
        <Route exact path="/" element={<NotesListPage />} />
        <Route exact path="/notes-list/:id" element={<IndividualNote />} />
        <Route exact path="/create-note" element={<CreateNotePage />} />
      </Routes>
    </div>
  );
}

export default App;
