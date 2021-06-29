import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/shop/shop";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
