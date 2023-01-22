const heading1 = React.createElement(
  "h1",
  { id: "title" },
  "Namaste Everyone from heading1"
);
console.log(heading1);
const heading2 = React.createElement(
  "h2",
  { id: "title2" },
  "Namaste Everyone from  heading2"
);
console.log(heading2);
const container = React.createElement("div", null, [heading1, heading2]);
console.log(heading1);
//const root1 = ReactDOM.createRoot(document.getElementById("root"));
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(container);
