import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Loading } from "./components/Loading";
import { DeparturesContainer } from "./container/DeparturesContainer";
import { usePosition } from "./lib/usePosition";

function App() {
  const position = usePosition();

  if (!position) {
    return <Loading />;
  }

  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <DeparturesContainer position={position} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
