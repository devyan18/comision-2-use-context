import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UsernameProvider } from "./providers/UsernameProvider.jsx";
import { CounterProvider } from "./providers/CounterProvider.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UsernameProvider>
    <CounterProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CounterProvider>
  </UsernameProvider>
);
