import { Bounce, toast } from "react-toastify";
import { Actividad } from "../interface"


export type ActividadAcciones = 
{type : 'save-actividad', payload: {nuevaActividad: Actividad}} |
{type : 'set-activadoId', payload: {id : Actividad['id']}} |
{ type: 'eliminar-actividad', payload: {id: Actividad['id']}} |
{type: 'resetear-app'}

export interface ActividadState {
  actividades: Actividad[],
  activadoId: Actividad['id']
}

const localStorageActividades = () : Actividad[] => {
  const activiades = localStorage.getItem('actividades')
  return activiades ? JSON.parse(activiades) : []
}

export const initialState : ActividadState = {
  actividades: localStorageActividades(),
  activadoId: ''
} 


export const activdadReducer = (
  state: ActividadState = initialState,
  action: ActividadAcciones
) => {
  if(action.type === 'save-actividad') {
    // este codigo maneja la logica para actualizar el state
    let actualizarActividades : Actividad[] = []
    if(state.activadoId){
      actualizarActividades = state.actividades.map( act => act.id === state.activadoId ? action.payload.nuevaActividad : act)
    } else {
      actualizarActividades = [...state.actividades, action.payload.nuevaActividad]
    }

    return {
      ...state,
      actividades: actualizarActividades,
      activadoId: ''
    }
  }

  if(action.type === 'set-activadoId'){
    return {
      ...state,
      activadoId: action.payload.id
    }
  }

  // eliminar actividad
  if(action.type === 'eliminar-actividad'){
    toast.error('🦄 Borrado Correctamente!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
    return {
      ...state,
      actividades: state.actividades.filter( act => act.id !== action.payload.id)
    }
  }

  // reiniciar la app
  if(action.type === 'resetear-app'){
    toast.info('🦄 Se reinicio la APP!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
    return {
      actividades: [],
      activadoId : ''
    }
  }

  return state
}


// El hook useReducer en React es una alternativa a useState para manejar el estado en componentes funcionales. Es útil cuando tienes una lógica de actualización de estado más compleja que involucra múltiples subvalores o cuando el estado actual depende del anterior.

// Sintaxis basica
// const [state, dispatch] = useReducer(reducer, initialState);
// state: Es el estado actual.
// dispatch: Es la función que utilizas para enviar acciones que cambian el estado.
// reducer: Es una función que determina cómo cambiará el estado en respuesta a una acción.
// initialState: Es el estado inicial.