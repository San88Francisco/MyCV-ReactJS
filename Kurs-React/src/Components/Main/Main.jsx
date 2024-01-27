import './Main.css'
import Experience from './Selection/Experience'
import Education from './Selection/Education'
import HeaderSelection from './Selection/HeaderSelection'
import Level from './Selection/level'
import AddressAwards from './Selection/Address'
export default function Main() {
  const iconLeft = <i className="fa-solid fa-chart-simple"></i>
  const iconRight = <i className="fa-solid fa-medal"></i>

  return (
    <section>
      <Experience whatIsItAbout="experience"></Experience>
      <Education whatIsItAbout="education"></Education>

      <div className="blockExpertiesAndAwards">
        <div className="experties">
          <HeaderSelection
            whatIsItAbout="experties"
            i={iconLeft}
          ></HeaderSelection>
          <Level
            language="JavaScript"
            width="180px"
          ></Level>
          <Level
            language="ReactJS"
            width="20px"
          ></Level>
          <Level
            language="CSS"
            width="250px"
          ></Level>
          <Level
            language="HTML"
            width="270px"
          ></Level>
          <Level
            language="GitHub"
            width="230px"
          ></Level>
        </div>

        <div className="awards">
          <HeaderSelection
            whatIsItAbout="awards"
            i={iconRight}
              ></HeaderSelection>
              <AddressAwards></AddressAwards>
              <AddressAwards></AddressAwards>
        </div>
      </div>
    </section>
  )
}
