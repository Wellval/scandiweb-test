import { Header } from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CategoryPage } from "./components/category/CategoryPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" render={() => <CategoryPage />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
