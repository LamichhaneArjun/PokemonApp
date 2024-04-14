import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartModal from "./cartModal";

export default class CartIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal() {
    this.setState(
      {
        showModal: !this.state.showModal,
      },
      () => {
        document.body.classList.toggle("dark");
      }
    );
  }

  render() {
    return (
      <>
        <div className="cartIcon" onClick={this.handleModal}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        {this.state.showModal && <CartModal onHandleModal={this.handleModal} />}
      </>
    );
  }
}
