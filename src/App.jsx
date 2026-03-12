import "./App.css";
import HeaderPanel from "./componets/HeaderPanel";
import KanbunProject from "./componets/KanbunProject";
import NavPanel from "./componets/NavPanel";

function App() {
  return (
    <div className="app">
      <NavPanel />
      <HeaderPanel />
      <KanbunProject />
    </div>
  );
}

export default App;
