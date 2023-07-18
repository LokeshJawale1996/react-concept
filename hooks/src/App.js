import './App.css';
import MainUseRefHook from './components/useRef/MainUseRefHook';
// import MainUseMemoComponent from './components/useMemo/MainUseMemoComponent';
// import MainUseCallbackComponent from './components/useCallback/MainUseCallbackComponent';
// import MainUseContext from './components/useContext/MainUseContext';
// import UseReducer from './components/useReducer/UseReducer';
// import { MainUseStateComponent } from './components/useState/MainUseStateComponent';
// import MainUseEffect from './components/useEffect/MainUseEffect';
function App() {
  return (
    <div className="App">
     <h1>Welcome To Hooks Learning!!!</h1>
     {/* <MainUseStateComponent/> */}
     {/* <MainUseEffect/> */}
     {/* <MainUseContext/> */}
     {/* <UseReducer/> */}
     {/* <MainUseCallbackComponent/> */}
     {/* <MainUseMemoComponent/> */}
     <MainUseRefHook/>
    </div>
  );
}

export default App;
