import React, {useReducer} from 'react';
import ToDo from './components/ToDo'
import './App.css';
import ToDoForm from './components/ToDoForm';
import { initialState, reducer } from './reducers/Reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <ToDoForm dispatch={dispatch}/>
      <ToDo state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
