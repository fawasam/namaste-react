const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hellow world from js"
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
