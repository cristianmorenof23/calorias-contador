import { useState, ChangeEvent, FormEvent, Dispatch, useEffect } from "react";
import { Actividad } from "../interface";
import { categorias } from "../data/categorias";
import { ActividadAcciones, ActividadState } from "../reducers/actividad-Reducer";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

interface FormProps {
  dispatch: Dispatch<ActividadAcciones>;
  state: ActividadState
}

const initialState: Actividad = {
  id: uuidv4(),
  categoria: 1,
  name: "",
  calorias: 0,
};

const Formulario = ({ dispatch, state }: FormProps) => {
  const [actividad, setActividad] = useState<Actividad>(initialState);

  useEffect(() => {
    if(state.activadoId){
      const seleccionarActividad = state.actividades.filter( act => act.id === state.activadoId)[0]
      setActividad(seleccionarActividad)
      
    }
  }, [state.activadoId, state.actividades])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    // comprobar si donde estamos escribiendo es categoria o calorias
    const isNumberField = ["categoria", "calorias"].includes(e.target.id);

    setActividad({
      ...actividad,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value,
    });
  };

  const isValidActividad = () => {
    const { name, calorias } = actividad;
    return name.trim() !== "" && calorias > 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({
      type: "save-actividad",
      payload: { nuevaActividad: actividad },
    });

    setActividad({ ...initialState, id: uuidv4() });

    toast.success("Guardado Correctamente!");
  };

  return (
    <form
      className="space-y-5 bg-white shadow p-10 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="categoria" className="font-bold">
          Categoria:{" "}
        </label>
        <select
          id="categoria"
          className="border border-cyan-300 p-2 rounded-lg w-full bg-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
          value={actividad.categoria}
          onChange={handleChange}
        >
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          Actividad:{" "}
        </label>

        <input
          id="name"
          type="text"
          className="border border-cyan-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
          placeholder="Ej: Comida, Jugo de Naranja, Ensadala, Ejercicios, Pesas, Bicicleta"
          value={actividad.name}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calorias" className="font-bold">
          Calorias:{" "}
        </label>

        <input
          id="calorias"
          type="number"
          className="border border-cyan-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
          placeholder="Calorias Ejemplo: 300 o 500"
          value={actividad.calorias}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit" // Asegúrate de que el tipo sea "submit"
        className="middle text-center none center w-full rounded-lg bg-cyan-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
        data-ripple-light="true"
        disabled={!isValidActividad()}
        value={
          actividad.categoria === 1 ? "Guardar Comida" : "Guardar Ejercicio"
        }
      />
    </form>
  );
};

export default Formulario;
