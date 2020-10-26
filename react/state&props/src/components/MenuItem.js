import React from "react";
import { Component } from "react";

class MenuItem extends Component {
  //create a state isFavorite that has the inital value of isFavorite that comes from the props
  constructor(props) {
    super(props);
    this.state = {
      isInBasket: false,
      isFavorite: false
    };
  }

  handleClickFavorite = () => {
    this.setState({
      isFavorite: !this.state.isFavorite
    });
  }

  handleInBasket = () => {
    this.setState({
      isInBasket: !this.state.isInBasket
    });
  }

  render() {
    return (
      <div className="itemContainer">
        <div className="leftContainer">
          <div className="imgContainer">
            {/* the image will receive the url src from the props */}
            <img src={this.props.foodImage} alt={this.props.description} />
          </div>
          <div className="itemDescription">
            {/* the h3 will receive the item name from the props */}
            <h3>{this.props.itemName}</h3>
            {/* the p will receive the item description from the props */}
            <p>{this.props.description}</p>
          </div>
        </div>
        <div className="rightContainer">
          {/* the div will receive the item price from the props */}
          <div>{this.props.price} EUR</div>

          {/* the div with id favorite will have 2 attributes:
                - onClick, will call the method handleClickFavorite,
                - classname, that will be conditionally rendered, depending on the value of isFavorite from the component's state
            */}
          <div 
          id="favorite"
          className={this.state.isFavorite ? "isFavorite" : "notFavorite"}
          onClick={this.handleClickFavorite}
          ></div>
        </div>
      </div>
    );
  }
}

export default MenuItem;
