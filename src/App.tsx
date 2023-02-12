import "./styles.css";
import { Login } from "./components/Login";
import { Counter } from "./components/Counter";

export default function App() {
  return (
    <div className="App">
      <Login />
      <br />
      <Counter />
    </div>
  );
}
