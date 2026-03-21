const Card = props => {
  return(
    <div>
      <div>
        <i className={`fa-solid fa-5x fa-${props.icone}`}></i>
      </div>
      <div>
        <h1>
          {props.nome}
        </h1>
        <h3>
          {props.classe}
        </h3>
        <h2>
          {props.nivel}
        </h2>
        <div className="progress" role="progressbar" aria-valuenow={props.nivel} aria-valuemin="0" aria-valuemax="20">
          <div className="progress-bar"
            style={{ width: `${(props.nivel / 20) * 100}%` }}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card