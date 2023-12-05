import logo from './logo.svg';
import './App.css';
import soma from './func/func'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> 1 + 1 = {soma(1,1)}</h1>
        
      </header>
    </div>
  );
}
export default App;
