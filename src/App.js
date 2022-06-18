import "./App.css";
import User from "./components/User";
import Register from "./components/Register";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="center">
        <Switch>
          <Route exact path="/">
            <Register />
          </Route>
          <Route exact path="/user/:name">
            <User />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
