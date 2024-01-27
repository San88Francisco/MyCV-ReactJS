const Level = ({language, width}) => {

   const grafikStyle = {
      width: width
   }
   return (
      <div className="category">
         <h5>{language}</h5>
         <div className="grafik">
            <div className="inFrafik" style={grafikStyle}></div>
         </div>
      </div>
   )
}

export default Level