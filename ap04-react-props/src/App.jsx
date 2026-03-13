import Pedido from "./Pedido"
import Cartao from './Cartao'

const App = () => {
  return (
    <div className='container border'>
      <div className='row'>
        <div className='col-12'>
          <i className="fa-solid fa-hippo fa-2x"></i>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-6 col-xl-3 border'>
          <Cartao cabecalho='22/12/2026'>
            <Pedido
              icone='fa-book'
              titulo='Livro'
              descricao='Um livro bom...'
              {componenteFeedback}
            ></Pedido>
          </Cartao>
        </div>
      </div>
    </div>
  )
}

export default App