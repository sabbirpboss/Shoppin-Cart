import './App.css';
import Question from './components/Question/Question';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className='for-width'>
      <div className="App">
        <h1 className='custom-color-green'>Hey, Confused? Get Ready.
        </h1>
        <h2 className='custom-color-blueviolet'>Choose Your Favourite but Only Four!!!</h2>
      </div>
      <Shop></Shop>
      <Question></Question>
    </div>
  );
}

export default App;
