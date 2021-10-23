import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Profile from "./pages/profile/Profile";
import {useSelector} from "react-redux";
import Auth from "./pages/auth/Auth";

function App() {
    const {auth} = useSelector(state => state.currentUser);
    return (
        <Router>
            {auth ? (
                <Switch>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Redirect to="/profile"/>
                </Switch>
            ) : (
                <Switch>
                    <Route path="/">
                        <Auth />
                    </Route>
                    <Redirect to="/"/>
                </Switch>
            )
            }
        </Router>
    );
}

export default App;
