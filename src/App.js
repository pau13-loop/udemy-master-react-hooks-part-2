import { useReducer } from "react";
import reducer, { initialState } from "./state/reducer";
import PublishMessage from "./components/PublishMessage";
import MessageBoard from "./components/MessageBoard";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('state', state);

  return (
    <div>
      <h1>Reaction</h1>
      <PublishMessage dispatch={dispatch} />
      <hr />
      <MessageBoard messages={state.messages} />
    </div>
  );
}

export default App;
