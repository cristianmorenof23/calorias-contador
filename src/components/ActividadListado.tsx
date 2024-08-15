import { useMemo, Dispatch } from "react";
import { categorias } from "../data/categorias";
import { Actividad } from "../interface";
import { ActividadAcciones } from "../reducers/actividad-Reducer";

interface ActiidadesListado {
  actividades: Actividad[];
  dispatch: Dispatch<ActividadAcciones>;
}

export default function ActividadListado({
  actividades,
  dispatch,
}: ActiidadesListado) {
  const categoriaNombre = useMemo(
    () => (categoria: Actividad["categoria"]) =>
      categorias.map((c) => (c.id === categoria ? c.name : " ")),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [actividades]
  );
  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        <span className="text-lime-500">Comida</span> y <span className="text-orange-500">Actividades</span>
      </h2>

  
      {
      actividades.length === 0 ? <p className="text-center mt-5 text-lg"> No hay actividades aun...</p> : 
        
      actividades.map((actividad) => (
        <div
          key={actividad.id}
          className="py-5 px-10 bg-white mt-5 flex justify-between shadow"
        >
          <div className="space-y-2 relative">
            <p
              className={`absolute -top-8 -left-8 px-10 py-2 text-white rounded-lg uppercase font-bold ${
                actividad.categoria === 1 ? "bg-lime-500" : "bg-orange-500"
              }`}
            >
              {categoriaNombre(+actividad.categoria)}
            </p>
            <p className="text-2xl font-bold pt-5 uppercase">
              {actividad.name}
            </p>
            <p className="font-black text-4xl text-lime-500">
              <span>{actividad.calorias} Calorias </span>
            </p>
          </div>

          <div className="flex gap-5 items-center">
            <button
              className="hover:scale-110 transition-transform duration-200"
              onClick={() =>
                dispatch({
                  type: "set-activadoId",
                  payload: { id: actividad.id },
                })
              }
            >
              <svg
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                width={35}
                height={35}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M974.4 332.8c31.2-31.2 16.8-96-14.4-127.2L818.4 64c-31.2-31.2-96-45.6-127.2-14.4L624 116 908 400l66.4-67.2z"
                    fill="#4DA796"
                  ></path>
                  <path
                    d="M451.2 856.8L167.2 572.8l407.2-406.4 180.8 114.4 102.4 168.8z"
                    fill="#EC7BB0"
                  ></path>
                  <path
                    d="M167.2 572.8l0.8-0.8c44-17.6 88 26.4 70.4 70.4l-0.8 0.8c80.8-6.4 148.8 60.8 141.6 141.6l2.4-0.8c44.8-16.8 87.2 28 68.8 72L47.2 991.2c-9.6 3.2-18.4-5.6-15.2-15.2l135.2-403.2z"
                    fill="#EFD1AF"
                  ></path>
                  <path
                    d="M624 116l55.2-55.2 1.6-0.8c43.2-12.8 83.2 27.2 70.4 70.4l-0.8 1.6c77.6 2.4 139.2 64.8 141.6 141.6l2.4-0.8c43.2-12 82.4 28.8 68 72l-55.2 55.2-174.4-125.6L624 116z"
                    fill="#4DA796"
                  ></path>
                  <path
                    d="M623.624 116.144l283.968 283.968-50.344 50.352L573.28 166.48z"
                    fill="#FFFEFE"
                  ></path>
                  <path
                    d="M38.4 990.4c-2.4-0.8-4-3.2-5.6-5.6l204.8-341.6 512-512 0.8-1.6c12.8-43.2-27.2-83.2-70.4-70.4l-1.6 0.8-72 72-8 8-432 432-133.6 404.8c-3.2 8.8 5.6 13.6 5.6 13.6z"
                    fill="#FDFDFC"
                  ></path>
                  <path
                    d="M895.2 272.8l-2.4 0.8-512 512-342.4 204.8c2.4 1.6 5.6 1.6 8.8 0.8l77.6-25.6 325.6-108.8L908 400l16.8-16.8 38.4-38.4c14.4-43.2-24.8-84-68-72z"
                    fill="#0D1014"
                  ></path>
                  <path
                    d="M908 408c-2.4 0-4-0.8-5.6-2.4L618.4 121.6c-1.6-1.6-2.4-3.2-2.4-5.6s0.8-4 2.4-5.6l66.4-66.4c13.6-13.6 32-20 53.6-20 31.2 0 64.8 13.6 85.6 34.4L965.6 200c16.8 16.8 28.8 42.4 32.8 68 4.8 29.6-2.4 54.4-18.4 70.4l-66.4 66.4c-1.6 2.4-4 3.2-5.6 3.2zM635.2 116l272.8 272.8 60.8-60.8c12-12 17.6-32.8 13.6-56.8-3.2-22.4-14.4-44.8-28-59.2L812.8 69.6c-17.6-17.6-48-29.6-74.4-29.6-12 0-29.6 2.4-41.6 15.2l-61.6 60.8zM167.2 580.8c-2.4 0-4-0.8-5.6-2.4-3.2-3.2-3.2-8 0-11.2L568 160.8c3.2-3.2 8-3.2 11.2 0s3.2 8 0 11.2L172.8 578.4c-1.6 1.6-4 2.4-5.6 2.4zM451.2 864.8c-2.4 0-4-0.8-5.6-2.4-3.2-3.2-3.2-8 0-11.2l407.2-407.2c3.2-3.2 8-3.2 11.2 0s3.2 8 0 11.2l-407.2 407.2c-1.6 1.6-4 2.4-5.6 2.4z"
                    fill="#6A576D"
                  ></path>
                  <path
                    d="M908 408c-2.4 0-4-0.8-5.6-2.4-3.2-3.2-3.2-8 0-11.2l53.6-53.6c4.8-16.8 0.8-33.6-11.2-46.4-12.8-12.8-30.4-18.4-48-12.8l-2.4 0.8c-2.4 0.8-4.8 0-7.2-1.6-1.6-1.6-3.2-4-3.2-6.4-2.4-72.8-60.8-132-134.4-134.4-2.4 0-4.8-1.6-6.4-3.2s-1.6-4.8-0.8-7.2l0.8-1.6c5.6-17.6 0.8-35.2-12-48-12.8-12.8-30.4-16.8-47.2-12l-53.6 53.6c-3.2 3.2-8 3.2-11.2 0s-3.2-8 0-11.2l55.2-55.2c0.8-0.8 2.4-1.6 3.2-1.6l1.6-0.8c23.2-7.2 47.2-0.8 64 16 15.2 15.2 21.6 35.2 17.6 56 73.6 7.2 132 65.6 139.2 139.2 20.8-3.2 41.6 3.2 56.8 19.2 16.8 17.6 22.4 41.6 14.4 64.8 0 0.8-0.8 2.4-1.6 3.2l-55.2 55.2c-2.4 0.8-4.8 1.6-6.4 1.6z"
                    fill="#6A576D"
                  ></path>
                  <path
                    d="M857.6 457.6c-2.4 0-4-0.8-5.6-2.4L568 172c-3.2-3.2-3.2-8 0-11.2l50.4-50.4c3.2-3.2 8-3.2 11.2 0l284 284c3.2 3.2 3.2 8 0 11.2l-50.4 50.4c-1.6 0.8-3.2 1.6-5.6 1.6z m-272-291.2l272.8 272.8 38.4-38.4L624 127.2l-38.4 39.2zM44 1000c-6.4 0-12-3.2-16-8-4-5.6-4.8-12-2.4-17.6L160 571.2c0.8-2.4 2.4-4 4.8-4.8l0.8-0.8c8-3.2 15.2-4.8 23.2-4.8 20.8 0 40 10.4 51.2 28 9.6 14.4 12.8 31.2 8.8 47.2 38.4 0 76 16.8 102.4 44.8 24 26.4 36.8 59.2 36.8 94.4 24.8-5.6 50.4 5.6 64.8 26.4 11.2 17.6 13.6 39.2 4.8 58.4-0.8 2.4-2.4 4-4.8 4.8L50.4 999.2c-2.4 0.8-4.8 0.8-6.4 0.8z m129.6-420.8L40 979.2c-0.8 1.6 0 2.4 0.8 3.2 0.8 1.6 2.4 1.6 4 1.6l400-133.6c4.8-13.6 3.2-28-4.8-40-12-17.6-34.4-25.6-55.2-17.6l-2.4 0.8c-2.4 0.8-5.6 0.8-8-0.8-2.4-1.6-3.2-4-3.2-7.2 3.2-35.2-8.8-68-32-93.6-25.6-28-62.4-42.4-100.8-39.2-2.4 0-5.6-0.8-7.2-3.2-1.6-2.4-2.4-4.8-0.8-8l0.8-0.8c5.6-14.4 4-30.4-4-42.4-12-18.4-33.6-26.4-53.6-19.2z"
                    fill="#6A576D"
                  ></path>
                  <path
                    d="M58.4 898.4L32.8 976c-3.2 9.6 5.6 18.4 15.2 15.2l77.6-25.6-67.2-67.2z"
                    fill="#6A576D"
                  ></path>
                </g>
              </svg>
            </button>

            <button
                          className="hover:scale-110 transition-transform duration-200"
                          onClick={() =>
                            dispatch({
                              type: "eliminar-actividad",
                              payload: { id: actividad.id },
                            })
                          }>
              <svg
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                width={35}
                height={35}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M512 128C300.8 128 128 300.8 128 512s172.8 384 384 384 384-172.8 384-384S723.2 128 512 128z m0 85.333333c66.133333 0 128 23.466667 179.2 59.733334L273.066667 691.2C236.8 640 213.333333 578.133333 213.333333 512c0-164.266667 134.4-298.666667 298.666667-298.666667z m0 597.333334c-66.133333 0-128-23.466667-179.2-59.733334l418.133333-418.133333C787.2 384 810.666667 445.866667 810.666667 512c0 164.266667-134.4 298.666667-298.666667 298.666667z"
                    fill="#D50000"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
