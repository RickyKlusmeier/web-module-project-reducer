import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers/index';
import { addOne, changeOperation, applyNumber, clearDisplay, clearMemory, memoryVal, runningMemory } from './actions/index';


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const eventHandler = (num) => {
    dispatch(applyNumber(num))
  }

  const switchOp = (value) => {
    dispatch(changeOperation(value))
  }

  const clearCal = () => {
    dispatch(clearDisplay())
  }

  const clearMem = () => {
    dispatch(clearMemory())
  }

  const inputMem = () => {
    dispatch(memoryVal())
  }

  const recallMem = () => {
    dispatch(runningMemory())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={inputMem}/>
              <CalcButton value={"MR"} onClick={recallMem}/>
              <CalcButton value={"MC"} onClick={clearMem}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => eventHandler(1)}/>
              <CalcButton value={2} onClick={ () => eventHandler(2)}/>
              <CalcButton value={3} onClick={ () => eventHandler(3)}/>
           </div>

            <div className="row">
              <CalcButton value={4} onClick={ () => eventHandler(4)}/>
              <CalcButton value={5} onClick={ () => eventHandler(5)}/>
              <CalcButton value={6} onClick={ () => eventHandler(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => eventHandler(7)}/>
              <CalcButton value={8} onClick={ () => eventHandler(8)}/>
              <CalcButton value={9} onClick={ () => eventHandler(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => switchOp('+')}/>
              <CalcButton value={"*"} onClick={() => switchOp('*')}/>
              <CalcButton value={"-"} onClick={() => switchOp('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearCal}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
