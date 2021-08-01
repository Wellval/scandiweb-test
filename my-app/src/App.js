import { Header } from "./components/header/Header";
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
} from "react-router-dom";
import CategoryPage from "./components/category/CategoryPage";
import { connect } from "react-redux";
import { requestCategories, selectCategory } from "./redux/actions/categories";
import React from "react";

export class App extends React.Component {
    componentDidMount() {
        this.props.requestCategories();
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Header categories={this.props.categories} 
                    selectedCategory={this.props.selectedCategory} 
                    selectCategory={this.props.selectCategory}
                    />
                    <Switch>
                    {this.props.categories.length > 0 && <React.Fragment>
                        <Route path='/:category' render={
                            props => this.props.categories.includes(props.match.params.category) ? 
                                <CategoryPage selectedCategory={props.match.params.category} /> :
                                <Redirect to={"/" + this.props.categories[0]} />
                        } />
                        <Route exact path='/'>
                            <Redirect to={"/" + this.props.categories[0]} />
                        </Route>
                    </React.Fragment>}
                    </Switch>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { ...state.categories };
};

export default connect(
    mapStateToProps,
    { requestCategories, selectCategory }
)(App);
