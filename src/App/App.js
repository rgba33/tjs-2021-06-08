import './App.css';
import Button from "./components/Button/Button";

function App() {
    let counter= 0;
  return (
    <div className="App">
        Demat Breizh {counter}
        <hr/>
        <Button><img src="https://cdn1.iconfinder.com/data/icons/science-technology-outline/91/Science__Technology_23-256.png" alt="click"/>Hello</Button>
        <Button isItalic={false}  bgcolor ='green'>Benjamin</Button>
        <Button clickAction={argument=>{
            counter++
            console.log(counter);
        }} bgcolor='tomato'>Cliquez Pas ici</Button>
        <Button bgcolor ='sky blue'></Button>
    </div>
  );
}

export default App;
