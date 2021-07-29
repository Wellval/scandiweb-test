import React from "react";
import FontAwesome from "react-fontawesome";

export class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isListOpen: false,
      headerTitle: this.props.title,
    };
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

  render() {
    const { isListOpen, headerTitle } = this.state;
    const { list } = this.props;

    return (
      <div className="dd-wrapper">
        <button type="button" className="dd-header" onClick={this.toggleList}>
          <div
            className={isListOpen ? "dd-header-title open" : "dd-header-title"}
          >
            {headerTitle}
          </div>
          {isListOpen ? (
            <FontAwesome name="angle-down" size="2x" className="open" />
          ) : (
            <FontAwesome name="angle-up" size="2x" />
          )}
        </button>
        {isListOpen && <div role="list" className="dd-list">
          {list.map((item) => (
            <button
              type="button"
              className="dd-list-item"
              key={item.id}
              onClick={() => this.selectItem(item)}
            >
              {item.title} {item.selected}
            </button>
          ))}
        </div>}
      </div>
    );
  }
}
