export interface Categoria {
  id: number
  name: string
}


export interface Actividad {
  id: string,
  categoria: number,
  name: string,
  calorias: number,
}
