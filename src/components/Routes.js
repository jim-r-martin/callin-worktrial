import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EpisodeContainer from "./episode/EpisodeContainer";
import ShowContainer from "./show/ShowContainer";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>Home Page</div>
        </Route>
        <Route path="/episode/:slug">
          <EpisodeContainer />
        </Route>
        <Route path="/show/:slug">
          <ShowContainer />
        </Route>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Router>
  );
}
