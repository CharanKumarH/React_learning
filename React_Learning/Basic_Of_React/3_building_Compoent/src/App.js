import logo from "./logo.svg";
import "./App.css";
import "./components/ListItem";
import ListItem from "./components/ListItem";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>This is my first React Component</p>
      <ListItem></ListItem>
    </div>
  );
}

export default App;
