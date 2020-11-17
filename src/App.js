import "./App.css";
import SuperHeroLayout from "./SuperHeroLayout/SuperHeroLayout";
import Navigation from "./NavigationLayout/NavigationLayout";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import ChartsLayout from "./ChartsLayout/ChartsLayout";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
        <Route path="/" exact component={ChartsLayout} />
        <Route path="/charts" exact component={ChartsLayout} />
        <Route path="/super-hero" exact component={SuperHeroLayout} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
