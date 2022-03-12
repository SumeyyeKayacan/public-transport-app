import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Loading } from "./components/Loading";
import { DeparturesContainer } from "./container/DeparturesContainer";
import { usePosition } from "./lib/usePosition";
import { theme } from "./theme";

function App() {
  const position = usePosition();

  if (!position) {
    return <Loading />;
  }

  const queryClient = new QueryClient();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <DeparturesContainer position={position} />
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
