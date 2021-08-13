import React from "react";
import FontAwesome from "react-fontawesome";
import { connect } from "react-redux";
import { selectCurrency, requestCurrencies } from '../../redux/actions/currencies';
import { currenciesSymbols } from '../../constants';
import { toggleCart } from "../../redux/actions/cart"

class CurrenciesDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isListOpen: false,
        };
        this.ref = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        this.props.requestCurrencies();
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.ref && !this.ref.current?.contains(event.target) && this.state.isListOpen === true) {
            this.toggleList()
        }
    }

    toggleList = () => {
        this.setState((prevState) => ({
            isListOpen: !prevState.isListOpen,
        }));
    };

    getSymbolForCurrency = currency => currenciesSymbols[currency] || '$';

    clickOnCurrency = currency => {
        this.props.selectCurrency(currency);
        this.toggleList();
    }

    render() {

        const { isListOpen } = this.state;

        return (
            <div className="dd-wrapper" ref={this.ref}>
                <button type="button" className="dd-header" onClick={() => {
                    this.toggleList();
                    if (this.props.isCartOpen === true) this.props.toggleCart();
                }}>
                    <div
                        className={isListOpen ? "dd-header-title open" : "dd-header-title"}
                    >
                        {this.getSymbolForCurrency(this.props.selectedCurrency)}
                    </div>
                    {isListOpen ? (
                        <FontAwesome name="angle-down" size="2x" className="open" />
                    ) : (
                        <FontAwesome name="angle-up" size="2x" />
                    )}
                </button>
                {(isListOpen && this.props.list.length > 0) && <div role="list" className="dd-list">
                    {this.props.list.map((item) => (
                        <button
                            type="button"
                            className="dd-list-item"
                            key={item}
                            onClick={() => this.clickOnCurrency(item)}
                        >
                            {this.getSymbolForCurrency(item)} {item}
                        </button>
                    ))}
                </div>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isCartOpen: state.cart.isOpen,
        selectedCurrency: state.currencies.selected,
        list: state.currencies.list
    };
};

export default connect(
    mapStateToProps,
    { requestCurrencies, selectCurrency, toggleCart }
)(CurrenciesDropdown);