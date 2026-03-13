const Feedback = (props) => {
  return (
    <div className="d-flex justify-content-evenly m-3">
      <button
        onClick={props.funcaoOK}
        type="button"
        className="btn btn-primary">
      </button>
      <button
        onClick={props.funcaoNOK}
        type="button"
        className="btn btn-danger">
      </button>
    </div>
  )
}

export default Feedback