const LifelineUsageConfirmation = ({
  handleLifelineUsageConfirmation,
  handleLifelineUsageCancel
}) => {
  return (
    <div>
      <h1>Confirm lifeline usage</h1>
      <button onClick={handleLifelineUsageConfirmation}>
        Confirm
      </button>
      <button onClick={handleLifelineUsageCancel}>
        Cancel
      </button>
    </div>
  )
}

export default LifelineUsageConfirmation