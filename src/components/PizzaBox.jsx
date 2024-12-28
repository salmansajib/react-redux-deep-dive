import { orderPizza } from "./redux";
import { connect } from "react-redux";

function PizzaBox(props) {
  // console.log(props);

  return (
    <div className="bg-neutral-50 px-4 py-10 max-w-[500px] mx-auto mt-10 rounded-lg text-center space-y-3 shadow-md">
      <h2 className="text-xl font-semibold">
        Number of Pizza Base available - {props.pizzaBase}
      </h2>
      <button
        onClick={props.orderPizza}
        className="bg-green-400 px-5 py-2 rounded-md hover:bg-green-500 transition-all"
      >
        Order Pizza
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pizzaBase: state.pizzaBase,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    orderPizza: () => dispatch(orderPizza()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBox);
