import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/shop/shop";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
