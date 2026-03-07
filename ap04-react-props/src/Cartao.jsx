const Cartao = props => {
  return (
    <div className="card">
      <div className="card-headr text-muted">
        {props.cabecalho}
      </div>
      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
}

export default Cartao