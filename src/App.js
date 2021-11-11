import logo from './logo.svg';
import './App.css';
import CC from './CC'

function App() {

  const shoot = () => {
    alert("Great Shot!");
  }
  const callAlert =() => {
    alert("Hello world");
  }
  const inputEvent = () => {
    alert("This is call imput event");
  }
  const mouseEnter = () => {
    alert("Hello this is mouse enter effect");
  }
  
  return (
    <div className="App">
      
      <h1>Event Handling in React js</h1>
      <button onClick={shoot}>Take the shot!</button><br/>
      <button onClick={callAlert}>CLick and Change</button><br/>
      <input type="text" className="form-control mb-2 mr-sm-2" onChange={inputEvent} placeholder="Jane Doe" />
      <p onMouseOver={mouseEnter}>This is Mouse Hover effect</p> <br/>

      <CC />
    
    </div>
  );
}

export default App;
