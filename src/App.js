import { useReducer } from "react";
import reducer, { initialState } from "./state/reducer";
import Context from "./context";
import PublishMessage from "./components/PublishMessage";
import MessageBoard from "./components/MessageBoard";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('state', state);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <h1>Reaction</h1>
      <PublishMessage />
      <hr />
      <MessageBoard />
    </Context.Provider>
  );
}

export default App;
