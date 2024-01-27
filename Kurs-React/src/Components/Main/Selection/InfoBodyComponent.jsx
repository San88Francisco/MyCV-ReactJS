const BogyInfo = ({ position, developer, data, infoLogo, textBodyInfo }) => {
  return (
    <div className="bogyInfo">
      <div className="whenInfo">
        <h3>{position}</h3>
        <h3>{developer}</h3>
        <h4>{data}</h4>
      </div>
      <div className="titleInfo">
        <h5>{infoLogo}</h5>
        <p>{textBodyInfo}</p>
      </div>
    </div>
  )
}
export default BogyInfo
