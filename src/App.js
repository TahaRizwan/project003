import './App.css';

function App({name,age}) {
  return (
    <div className="App">
        <div>
            <h1><strong>Hello {name}.</strong> 
            <ul>
              <li>Your age is {age}</li>
              </ul>
            </h1>
        </div>      
    </div>
  );
}

export default App;
