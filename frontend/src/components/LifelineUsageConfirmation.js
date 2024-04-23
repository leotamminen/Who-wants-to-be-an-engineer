const LifelineUsageConfirmation = ({
  handleLifelineUsageConfirmation,
  handleLifelineUsageCancel
}) => {
  return (
    <div className="lifeline-confirm-cancel-container">
      <h1 className="start-h1">Confirm lifeline usage</h1>
      <button
        onClick={handleLifelineUsageConfirmation}
        className="lifeline-confirm-cancel-button"
      >
        Confirm
      </button>
      <button
        onClick={handleLifelineUsageCancel}
        className="lifeline-confirm-cancel-button"
      >
        Cancel
      </button>
    </div>
  )
}

export default LifelineUsageConfirmation