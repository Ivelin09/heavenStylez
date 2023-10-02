import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main'
import CreateProd from './components/CreateProd'
import DisplayProd from './components/DisplayProd'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
              
        </Route>
        <Route path="/CreateProd" element={<CreateProd />}>
              
        </Route>
        <Route path="/DisplayProd" element={<DisplayProd />}>
              
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
