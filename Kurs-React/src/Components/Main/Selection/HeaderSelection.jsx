const HeaderSelection = ({ whatIsItAbout, i }) => {
  return (
    <div className="headerSelection">
      <h2>{whatIsItAbout}</h2>
      <hr />
      {i}
    </div>
  )
}

export default HeaderSelection
