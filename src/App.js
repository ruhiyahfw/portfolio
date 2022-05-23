import './App.css';

import Greeting from './components/Greeting';
import Navbar from './components/Navbar';
import Tictactoe from './components/games/Tictactoe';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Greeting/>
      <Tictactoe/>
      <Contact/>
    </div>
  );
}

export default App;
