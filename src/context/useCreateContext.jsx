import { useReducer, createContext } from "react";

const CreateContext = createContext();
function changeContextValue(state, action) {
  switch (action.type) {
    case "Change_Mode":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
}
function CreateContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeContextValue, {
    mode: "light",
  });
  const changeMode = (mode) => {
    dispatch({
      type: "Change_Mode",
      payload: mode,
    });
  };
  return (
    <div>
      <CreateContext.Provider value={{ ...state, changeMode }}>
        {children}
      </CreateContext.Provider>
    </div>
  );
}

export { CreateContextProvider, CreateContext };
