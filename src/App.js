import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Company from "./Components/pages/company";
import Customer from "./Components/pages/customer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/customer/:id">
            <Customer />
          </Route>
          <Route path="/company/:id">
            <Company />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
