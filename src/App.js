import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Profile from "./pages/profile/Profile";

function App() {
  return (
      <Router>
              <Switch>
                  <Route path="/profile">
                      <Profile />
                  </Route>
                  <Route exact path="/">
                      <Auth />
                  </Route>

                  <Redirect to="/" />
              </Switch>
      </Router>
  );
}

export default App;
