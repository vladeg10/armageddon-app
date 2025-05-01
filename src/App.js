import logo from './logo.svg';
import './App.css';
import {Button} from "./button/Button";

function App() {
  return (
    <div className="App">
      <h1 className="header" style={{background: "yellow"}}>Header level 1</h1>
      <div>Test div</div>
        <Button>text</Button>
    </div>
  );
}

export default App;
