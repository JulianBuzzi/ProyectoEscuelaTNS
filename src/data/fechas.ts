interface Fechas {
  fecha: string
  lugar: string
  horario: number
  precioEntrada: number
  urlAdquirirTickets: string // Cuando el usuario da click en el botón ticket se lo redirecciona con este url al sitio donde puede adquirir tickets
}

export const fechas: Fechas[] = [
  { fecha: '15 de Julio', lugar: 'Teatro Trinidad Guevara', horario: 21, precioEntrada: 2500, urlAdquirirTickets: 'https://www.ticketportal.com.ar/' },
  { fecha: '11 de Agosto', lugar: 'La Caverna de Elme', horario: 23, precioEntrada: 3000, urlAdquirirTickets: 'https://www.ticketek.com.ar/' },
  { fecha: '22 de Noviembre', lugar: 'Parador 5', horario: 19, precioEntrada: 1800, urlAdquirirTickets: 'https://www.ticketek.com.ar/' }
]
