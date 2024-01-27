const InfoDetails = ({ messeger, linkMy }) => {
  return (
    <div className="blockInfo">
      <p>{messeger}</p>
      <p>:</p>
      <p> {linkMy}</p>
    </div>
  )
}

export default InfoDetails
