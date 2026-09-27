import Dashboard from "./pages/Dashboard";
import Transactions from "./transactions";

function App() {
  const path = window.location.pathname;

  if (path === "/transactions") {
    return <Transactions />;
  }

  return <Dashboard />;
}

export default App;