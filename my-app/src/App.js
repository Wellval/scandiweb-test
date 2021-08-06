import Header from "./components/header/Header";
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
} from "react-router-dom";
import CategoryPage from "./components/category/CategoryPage";
import { connect } from "react-redux";
import { requestCategories } from "./redux/actions/categories";
import React from "react";
import ProductPage from "./components/product/ProductPage";
import { CartPage } from "./components/cart/CartPage";

class App extends React.Component {
    componentDidMount() {
        this.props.requestCategories();
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Header />
                    <Switch>
                        {this.props.categories.length > 0 && <React.Fragment>
                            <Route exact path='/:category/:product' render={
                                props => <ProductPage
                                    category={props.match.params.category}
                                    product={props.match.params.product}
                                />
                            } />
                            <Route exact path='/:category' render={
                                props => <CategoryPage category={props.match.params.category} />
                            } />
                            <Route exact path='/cart' render={
                                props => <CartPage />
                            }/>
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
    return { 
        categories: state.categories.list
    };
};

export default connect(
    mapStateToProps,
    { requestCategories }
)(App);
