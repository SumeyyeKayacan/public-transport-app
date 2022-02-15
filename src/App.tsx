import "./App.css";
import { Loading } from "./components/Loading";
import { DeparturesContainer } from "./container/DeparturesContainer";
import { usePosition } from "./lib/usePosition";

function App() {
  const position = usePosition();

  if (!position) {
    return <Loading />;
  }

  return (
    <div className="App">
      <DeparturesContainer position={position} />
    </div>
  );
}

export default App;
