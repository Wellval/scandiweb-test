import React from "react";
import FontAwesome from "react-fontawesome";
import { connect } from "react-redux";
import { selectCurrency, requestCurrencies } from '../../redux/actions/currencies';
import { currenciesSymbols } from '../../constants';

class CurrenciesDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isListOpen: false,
        };
    }

    componentDidMount() {
        this.props.requestCurrencies();
    }

    toggleList = () => {
        this.setState((prevState) => ({
            isListOpen: !prevState.isListOpen,
        }));
    };

    selectItem = (item) => {
        const { resetThenSet } = this.props;
        const { title, id, key } = item;

        this.setState(
            {
                headerTitle: title[0],
                isListOpen: false,
            },
            () => resetThenSet(id, key)
        );
    };

    getSymbolForCurrency = currency => currenciesSymbols[currency] || '$';

    clickOnCurrency = currency => {
        this.props.selectCurrency(currency);
        this.toggleList();
    }

    render() {

        const { isListOpen } = this.state;

        return (
            <div className="dd-wrapper">
                <button type="button" className="dd-header" onClick={this.toggleList}>
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
    return { ...state.currencies };
};

export default connect(
    mapStateToProps,
    { requestCurrencies, selectCurrency}
)(CurrenciesDropdown);