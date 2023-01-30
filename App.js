import { createElement } from "react";
import ReactDOM from "react-dom/client";

/*
 <div class="header">
      <h1>Namaste React</h1>
      <ul>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Home</li>
      </ul>
    </div>
*/

const Title = () => (
  <h1 id="title" key="h1">
    Namaste I am heading
  </h1>
);

const HeaderComponent = () => (
  <div>
    <h1 id="title" key="h1">
      Namaste Everyone from heading1
    </h1>
    <h2>{Title()}</h2>
  </div>
);
//const root1 = ReactDOM.createRoot(document.getElementById("root"));
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<HeaderComponent />);
