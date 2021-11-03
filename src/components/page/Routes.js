import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EpisodePageContainer from "../episode/EpisodePageContainer";
import ShowPageContainer from "../show/ShowPageContainer";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>Home Page</div>
        </Route>
        <Route path="/episode/:slug">
          <EpisodePageContainer />
        </Route>
        <Route path="/show/:slug">
          <ShowPageContainer />
        </Route>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Router>
  );
}
