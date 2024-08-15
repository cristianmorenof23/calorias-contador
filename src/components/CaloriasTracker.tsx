import { useMemo } from "react";
import { Actividad } from "../interface";
import CaloriasDisplay from "./CaloriasDisplay";

interface CaloriasTrackerProps {
  actividades: Actividad[];
}

const CaloriasTracker = ({ actividades }: CaloriasTrackerProps) => {
  // Contadores
  const caloriasConsumo = useMemo(
    () =>
      actividades.reduce(
        (total, actividad) =>
          actividad.categoria === 1 ? total + actividad.calorias : total,
        0
      ),
    [actividades]
  );

  const caloriasBurned = useMemo(
    () =>
      actividades.reduce(
        (total, actividad) =>
          actividad.categoria === 2 ? total + actividad.calorias : total,
        0
      ),
    [actividades]
  );

  // calcular calorias totales
  const caloriasTotal = useMemo(() => caloriasConsumo - caloriasBurned ,[actividades])
  return (
    <>
      <h2 className="text-center text-4xl font-black text-white">
        Resumen de Calorias
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-5">
        <CaloriasDisplay calorias={caloriasConsumo} texto="Consumidas" />

        <CaloriasDisplay calorias={caloriasBurned} texto="Ejercicio" />

        <CaloriasDisplay calorias={caloriasTotal} texto="Diferencia" />


      </div>
    </>
  );
};

export default CaloriasTracker;
