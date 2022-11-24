// import monigota from '../images/monigota.png';
import '../styles/main.scss';
import {useState} from 'react';
import React from 'react';

function App() {
  // VARIABLES ESTADO
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter ] = useState('');
  const [word, setWord] = useState('katakroker');
  const [userLetters, setUserLetters] = useState([]);

    // FUNCIONES
  const formSubmit =(e)=>{
    e.preventDefault();
  }
  const increment = () => {
    setNumberOfErrors(numberOfErrors+1);
    if(numberOfErrors === 13){
      
    }
  };
  
  const inputLetter = (ev) => {
    setLastLetter(ev.target.value);
    let regex = new RegExp("^[a-zA-Z ]+$");

    if (regex.test(ev.target.value)) {
      setLastLetter(ev.target.value)

    } else {
      setLastLetter('');
    }
    setUserLetters(lastLetter);
    console.log(lastLetter);
  }
  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letter, index) => {
      return( 
      <React.Fragment key={index}>
      <li  className="letter"></li>
      </React.Fragment>);
    });
  };

  return (
    <div className="App">
      <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              {renderSolutionLetters()}
              {/* <li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li> */}
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form" onSubmit={formSubmit}>
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              onInput={inputLetter}
              value = {lastLetter}
            />
             <button onClick={increment}>Incrementar</button>
          </form>

         

        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
    </div>
  );
}

export default App;
