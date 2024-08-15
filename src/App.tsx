import Formulario from "./components/Formulario";
import { useReducer, useEffect } from "react";
import { activdadReducer, initialState } from "./reducers/actividad-Reducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ActividadListado from "./components/ActividadListado";
import CaloriasTracker from "./components/CaloriasTracker";

function App() {
  const [state, dispatch] = useReducer(activdadReducer, initialState);

  useEffect(() => {
    localStorage.setItem("actividades", JSON.stringify(state.actividades));
  }, [state.actividades]);

  const canRestarApp = () => state.actividades.length > 0;

  return (
    <>
      <header className="bg-cyan-400 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de Calorias
          </h1>

          <button
            className="relative inline cursor-pointer  font-medium before:bg-cyan-900  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 text-sm disabled:opacity-10"
            disabled={!canRestarApp()}
            onClick={() => dispatch({ type: "resetear-app" })}
          >
            Reiniciar APP
          </button>
        </div>
      </header>

      <section className="bg-cyan-50 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Formulario dispatch={dispatch} state={state} />
        </div>
      </section>

      <section className="bg-gray-800 py-10">
        <div className="max-w-4xl mx-auto">
          <CaloriasTracker actividades={state.actividades} />
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <ActividadListado actividades={state.actividades} dispatch={dispatch} />
      </section>
      <ToastContainer />
    </>
  );
}

export default App;
