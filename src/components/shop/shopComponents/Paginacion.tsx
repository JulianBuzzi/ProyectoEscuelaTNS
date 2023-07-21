import React from 'react'
import './Paginacion.css'

interface Props{
  paginaActual: number
  setPaginaActual: React.Dispatch<React.SetStateAction<number>>
  productosPorPagina: number
  totalProductos: number
}

export const Paginacion: React.FC<Props> = ({paginaActual, setPaginaActual, productosPorPagina, totalProductos}: Props): JSX.Element => {
  
  const numeroDePaginas: Array<number> = []

  for (let i = 1; i <= (Math.ceil(totalProductos / productosPorPagina)); i++){
    numeroDePaginas.push(i)
  }
  
  const pagAnt = (): void => {
    if (paginaActual > 1){
      setPaginaActual(paginaActual - 1)
    }
  }

  const pagSig = (): void => {
    if (paginaActual < numeroDePaginas.length){
      setPaginaActual(paginaActual + 1)
    }
  }

  const irPaginaArbitraria = (numPag: number): void => {
    setPaginaActual(numPag)
  }

  return (
    <nav className="pagination is-centered" role="navigation" aria-label="pagination">
      <a className={`pagination-previous ${paginaActual === 1 ? 'is-disabled' : ''}`} onClick={pagAnt}>Anterior</a>
      <a className={`pagination-next ${paginaActual >= numeroDePaginas.length ? 'is-disabled' : ''}`} onClick={pagSig}>Siguiente</a>
      <ul className="pagination-list">
        {
          numeroDePaginas.map(pagina => (
            <li key={pagina}>
              <a className={`pagination-link ${pagina === paginaActual ? 'is-current' : ''}`} onClick={() => irPaginaArbitraria(pagina)}>
                {pagina}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
} 