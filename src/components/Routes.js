import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Episode from "./episode/EpisodeContainer";
import Show from "./Show";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>Home Page</div>
        </Route>
        <Route path="/episode/:slug">
          <Episode />
        </Route>
        <Route path="/show/:slug">
          <Show />
        </Route>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Router>
  );
}
