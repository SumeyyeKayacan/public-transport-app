import { DeparturesContainer } from "./DeparturesContainer";
import { usePosition } from "./usePosition";

function App() {
  const position = usePosition();
  if (!position) {
    return <>Loading...</>;
  }

  return (
    <div className="App">
      <DeparturesContainer position={position} />
    </div>
  );
}

export default App;
