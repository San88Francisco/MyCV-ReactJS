import './ExperienceAndEducation.css'
import BogyInfo from './InfoBodyComponent'
import HeaderSelection from './HeaderSelection'
const Experience = () => {
  const icon = <i className="fa-solid fa-briefcase"></i>
  return (
    <div>
      <HeaderSelection
        whatIsItAbout="experience"
        i={icon}
      ></HeaderSelection>

      <BogyInfo
        position="team leader &"
        developer="developer js"
        data="09-Novemdev-2024"
        infoLogo="Website Costume Jewelry"
        textBodyInfo="Developing a multi-page product with pure JavaScript and SCSS entails
        creating a high-quality web app without external libraries or
        frameworks. Gulp automates the build process for efficiency, including
        SCSS to CSS compilation, JavaScript minification, and other tasks
        essential for production."
      />
      <BogyInfo
        position="lorem input &"
        developer="lorem input"
        data="01-Lorem-2024"
        infoLogo="Lorem ipsum dolor sit"
        textBodyInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum natus at consequuntur magnam explicabo a hic quam, amet doloremque sed adipisci distinctio esse inventore minus exercitationem nemo similique vitae mollitia."
      />
      <BogyInfo
        position="lorem input &"
        developer="lorem input"
        data="01-Lorem-2024"
        infoLogo="Lorem ipsum dolor sit"
        textBodyInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum natus at consequuntur magnam explicabo a hic quam, amet doloremque sed adipisci distinctio esse inventore minus exercitationem nemo similique vitae mollitia."
      />
    </div>
  )
}
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nisi tenetur tempora natus nobis similique asperiores molestiae, quibusdam porro nemo commodi harum consequuntur vero quis ex quod impedit, cum obcaecati?

export default Experience
