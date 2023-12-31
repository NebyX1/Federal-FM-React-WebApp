import React from 'react'

export const Grid = () => {
  return (
    <div className="container py-5">
    <div className="headings-font mb-2 mt-2">
      <h1 className="display-2 text-center" style={{ color: "#8D455E" }}>Nuestra Programación</h1>
    </div>
    <div className="table-responsive mt-5">
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th></th>
            <th>Lunes a Viernes</th>
            <th>Sábados</th>
            <th>Domingos</th>
          </tr>
        </thead>
         <tbody>
              <tr>
                  <th>De 00:00 a 07:00 hs</th>
                  <td>Los Sonidos de la Noche</td>
                  <td>Los Sonidos de la Noche</td>
                  <td></td>
              </tr>
              <tr>
                  <th>De 07:00 a 08:30 hs</th>
                  <td>Desayuno y Noticias</td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <th>De 08:30 a 10:30 hs</th>
                  <td>Vivir la Radio</td>
                  <td>Sin Pelos en la lengua</td>
                  <td>Música en Federal</td>
              </tr>
              <tr>
                  <th>De 10:30 a 11:00 hs</th>
                  <td>La Isla</td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <th>De 12:00 a 13:00 hs</th>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <th>De 13:00 a 14:00 hs</th>
                  <td>Música en Federal</td>
                  <td>Divague Tropical Sábados</td>
                  <td>Música en Federal</td>
              </tr>
              <tr>
                  <th>De 14:00 a 15:00 hs</th>
                  <td>Tarde Feroz</td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <th>De 15:00 a 16:00 hs</th>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <th>De 16:00 a 18:00 hs</th>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <th>De 18:00 a 20:00 hs</th>
                  <td>Clásicos y algo más</td>
                  <td>Fin de Manía</td>
                  <td>El Satelite</td>
              </tr>
              <tr>
                  <th>De 20:00 a 21:00 hs</th>
                  <td>Telemundo Central</td>
                  <td>El Pinguy en la Radio</td>
                  <td>Éxitos de Federal</td>
              </tr>
              <tr>
                  <th>De 21:00 a 22:00 hs</th>
                  <td>Divague Tropical</td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <th>De 22:00 a 00:00 hs</th>
                  <td>Música en Federal</td>
                  <td></td>
                  <td></td>
              </tr>
          </tbody>
      </table>
    </div>
  </div>
  )
}
