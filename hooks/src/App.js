import './App.css';
import MainUseContext from './components/useContext/MainUseContext';
// import { MainUseStateComponent } from './components/useState/MainUseStateComponent';
// import MainUseEffect from './components/useEffect/MainUseEffect';
function App() {
  return (
    <div className="App">
     <h1>Welcome To Hooks Learning!!!</h1>
     {/* <MainUseStateComponent/> */}
     {/* <MainUseEffect/> */}
     <MainUseContext/>
    </div>
  );
}

export default App;
