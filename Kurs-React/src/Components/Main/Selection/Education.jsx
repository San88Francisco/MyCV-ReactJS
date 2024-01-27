import './ExperienceAndEducation.css'
import BogyInfo from './InfoBodyComponent'
import HeaderSelection from './HeaderSelection'
const Education = () => {
  const icon = <i className="fa-solid fa-graduation-cap"></i>
  return (
    <div>
      <HeaderSelection
        whatIsItAbout="education"
        i={icon}
      ></HeaderSelection>
      <BogyInfo
        position="step-it"
        developer="frontent dev"
        data="15-July-2023"
        infoLogo="academy-it"
        textBodyInfo="
        Here, I've mastered the fundamentals of programming, specifically HTML, CSS, and JavaScript, and expanded my knowledge by learning ReactJS. This represents a significant step in developing my skill set, enabling more efficient creation of web applications and understanding contemporary development approaches."
      />
      <BogyInfo
        position="lorem"
        developer="lorem input"
        data="01-Lorem-2024"
        infoLogo="Lorem ipsum dolor sit"
        textBodyInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum natus at consequuntur magnam explicabo a hic quam, amet doloremque sed adipisci distinctio esse inventore minus exercitationem nemo similique vitae mollitia."
      />
    </div>
  )
}
export default Education
