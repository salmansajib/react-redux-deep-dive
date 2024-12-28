import PizzaBox from "./components/PizzaBox";
import { Provider } from "react-redux";
import store from "./components/redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <PizzaBox />
      </div>
    </Provider>
  );
}

export default App;
