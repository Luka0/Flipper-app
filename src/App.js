import { useEffect, useState } from "react";
import DesiredOutcome from "./components/DesiredOutcome";
import Grid from "./components/Grid";
import { useDispatch, useSelector } from "react-redux";
import { decrementScore, incrementScore, setShowDesiredOutcome } from "./reducers.js/appSlice";
import { randomizeActivities } from "./reducers.js/desiredOutcomeSlice";
import { resetGridActivities } from "./reducers.js/gridSlice";


function App() {

  const app = useSelector(state => state.appReducer);
  const desiredActivities = useSelector(state => state.desiredOutcomeReducer.activities);
  const gridActivities = useSelector(state => state.gridReducer.activities);
  const dispatch = useDispatch();

  useEffect(() => {
    if(app.showDesiredOutcome === true){
      setTimeout(() => {
        dispatch(setShowDesiredOutcome(false))
      }, 500)
    }
  }, [app.showDesiredOutcome]);

  function handleNewGame() {
    dispatch(randomizeActivities());
    dispatch(setShowDesiredOutcome(true));
    dispatch(resetGridActivities());
  }

  function handleSubmitGuess() {
    if(desiredActivities.toString() === gridActivities.toString()){
      dispatch(incrementScore());
    }
    else{
      dispatch(decrementScore());
    }
    handleNewGame()
  }

  return (
    <div>
      <div id="progress">
        <h2>Score: {app.score}</h2>
      </div>
      {
        app.showDesiredOutcome ? 
        <DesiredOutcome /> : 
        <Grid />
      }
      <button id='submit' onClick={handleSubmitGuess}>Submit</button>
      <button id='newGame' onClick={handleNewGame}>New game</button>
    </div>
  );
}

export default App;
