


import './App.css';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import Todos from './Components/Todos';
import AllRoutes from './Routes/AllRoutes';


function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />

    </div>
  );
}

export default App;
