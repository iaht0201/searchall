import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Routes from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
const stripePromise = loadStripe(
  "pk_test_51JsIa2B3ETQpYPYdcEkUiV3fzksrxi5WrIkuHnUaRcP9LimsOxNxn0a9oCy5cTy5pcHtUa78RKROgmlAbGNyeI3T00kpKaZFW4"
);
function App() {
  return (
    <Elements stripe={stripePromise}>
      <div className="App">
        <Routes />
      </div>
    </Elements>
  );
}

export default App;
