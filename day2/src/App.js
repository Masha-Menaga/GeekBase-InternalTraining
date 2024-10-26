import "./App.css";
import FirstComponent from "./components/FirstComponent";
import SecComponent from "./components/SecComponent";
function App() {
  console.log("hi");
  return (
    <>
      <h1>Day 2</h1>
      <p className="red">Some text</p>
      <FirstComponent />
      <SecComponent />
    </>
  );
}

export default App;
