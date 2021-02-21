import logo from './logo.svg';
import './App.css';
import MainLanding from "./components/MainLanding";
import {
    BrowserRouter as Router,
    Switch, Route
} from "react-router-dom";
import LoginSignup from "./components/LoginSignup";
import OnboardingPage from "./components/OnboardingPage";
import WelcomePage from "./components/WelcomePage";
import MessagesScreen from "./components/MessagesScreen";


function App() {
    return (
        <Router>

            <div className="body">
                <Switch>
                    <Route path="/signup">
                        <LoginSignup/>
                    </Route>
                    <Route path="/onboarding">
                        <OnboardingPage/>
                    </Route>
                    <Route path="/welcome">
                        <WelcomePage/>
                    </Route>
                    <Route path="/messages">
                        <MessagesScreen/>
                    </Route>
                    <Route path="/">
                        <MainLanding/>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
