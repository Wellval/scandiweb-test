import { Header } from "./components/header/Header";
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
} from "react-router-dom";
import CategoryPage from "./components/category/CategoryPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Redirect exact={true} from="/" to="/clothes/women" />
                    <Route path="/clothes/women">
                        <CategoryPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
