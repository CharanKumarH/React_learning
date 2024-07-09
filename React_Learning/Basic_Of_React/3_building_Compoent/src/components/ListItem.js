import AddToCartIcon from "../assets/add_to_cart_icon.svg";

const ListItem = () => {
  return (
    <div>
      <img src="/assets/Placeholder.png"></img>
      <div>
        <div>
          <span>₹350 </span>
          <small>
            <strike>₹450</strike>
          </small>
        </div>
        <div>
          <h3>Title of Iteams</h3>
        </div>
      </div>
      <button>
        Add to cart
        <span>
          <img src={AddToCartIcon}></img>
        </span>
      </button>
    </div>
  );
};

export default ListItem;
