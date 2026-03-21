import React, { useState } from "react"
import Card from "./Card"

const App = () => {
  const [classe, setClasse] = useState('Curandeiro')
  const [nivel, setNivel] = useState(1)
  const [nome, setNome] = useState('')
  const icone = {
    'Guerreiro': 'shield-halved',
    'Mago': 'hat-wizard',
    'Arqueiro': 'bullseye',
    'Curandeiro': 'kit-medical'
  }
  return (
    <div className='container'>
      <div className="row justify-content-center" style={{
          margin: 8
      }}>
        <div className="col-6 d-flex flex-column border" style={{
          margin: 10,
          borderRadius: 10,
          padding: 35
        }}>
          <h1 style={{
            fontSize: 37,
            marginBottom: 10
          }}>
            Criador de Personagem RPG
          </h1><hr></hr>
          <h6 style={{
            fontSize: 20,
            marginBottom: 10
          }}>
            Nome do Personagem
          </h6>
          <input
            style={{
              marginBottom: 10
            }}
            placeholder="Nome do personagem"
            type='text'
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            >
          </input>
          <h6 style={{
            fontSize: 20,
            marginBottom: 10
          }}>
            Classe
          </h6>
          <select
            style={{
              marginBottom: 10,
              height: 32
            }}
            value={classe} onChange={(event) => setClasse(event.target.value)}>
            <option value="Guerreiro">Guerreiro</option>
            <option value="Mago">Mago</option>
            <option value="Arqueiro">Arqueiro</option>
            <option value="Curandeiro">Curandeiro</option>
          </select>
          <div className="d-flex justify-content-center align-items-baseline">
            <h6 style={{
              fontSize: 20,
              marginBottom: 10,
              marginRight: 20
            }}>
              Nivel
            </h6>
            <button 
              onClick={() => {
                nivel <= 0 ? setNivel(0) : setNivel(nivel - 1)
              }}
              style={{
                border: 0,
                width: 60,
                height: 40,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                backgroundColor: 'lightblue'
              }}>
              -
            </button>
            <label style={{
              backgroundColor: 'lightcyan',
              height: 40,
              width: 60,
              marginTop: 0
            }}>
              {nivel}
            </label>
            <button onClick={() => {
                nivel >= 20 ? setNivel(20) : setNivel(nivel + 1)
            }} style={{margin: 8}}>
              +
            </button>
          </div>
          <Card
            icone={icone[classe]}
            nome={nome}
            classe={classe}
            nivel={nivel}
          ></Card>
        </div>
      </div>
    </div>
  )
}

export default App