import React, { useState } from "react";

const App = () => {
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [estacao, setEstacao] = useState(null)
  const [data, setData] = useState(null)
  const [icone, setIcone] = useState(null)
  const [mensagemErro, setMensagemErro] = useState(null)
  const icones = {
    'Primavera': 'cloud-sun',
    'Outono': 'canadian-maple-leaf',
    'Verao': 'sun',
    'Inverno': 'snowflake'
  }
  const obterEstacao = (dataAtual, latitude) => {
    const ano = dataAtual.getFullYear()
    const d1 = new Date(ano, 5, 21)
    const d2 = new Date(ano, 8, 23)
    const d3 = new Date(ano, 11, 22)
    const d4 = new Date(ano, 2, 21)
    const estaNoSul = (latitude < 0)
    if (dataAtual >= d1 && dataAtual < d2) {
      return estaNoSul ? 'Inverno' : 'Verao'
    } else if (dataAtual >= d2 && dataAtual < d3) {
     return estaNoSul ? 'Primavera' : 'Outono'
    } else if (dataAtual >= d4 && dataAtual < d1) {
     return estaNoSul ? 'Outono' : 'Primavera'
    } else {
     return estaNoSul ? 'Verao' : 'Inverno'
    }
  }
  const obterLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        setData(new Date.now())
        setEstacao(obterEstacao(data, latitude))
        setIcone(icones[estacao])
      },
      (err) => {
        setMensagemErro('Para ver a localizacao deve ser liberada!')
      }
    )
  }
  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div
                style={{height: '6rem'}} 
                className="d-flex align-items-center">
                <i className={`fa-solid fa-3x fa-${icone}`}></i>
                <p className="w-75 ms-3 text-center fs-1">
                  {estacao}
                </p>
              </div>
              <div>
                {
                  latitude ?
                    `Coordenadas: ${latitude},${longitude}. Data: ${data}` :
                    mensagemErro ?
                      mensagemErro :
                      `Clique no botao para ver sua estacao climatica`
                }
              </div>
              <button
                className="btn btn-outline-primary w-100 mt-2"
                onClick={obterLocalizacao}>
                Qual a minha estacao?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App