import { useReducer } from "react";
import reducer, { initialState } from "./state/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('state', state);

  return (
    <div>
      <h1>Reaction</h1>
    </div>
  );
}

export default App;
