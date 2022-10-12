
import { Routes, Route} from "react-router-dom";
import Home from './components/home/home';
import './scss/app.scss';


function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>} />
      
    </Routes>
  );
}

export default App;
