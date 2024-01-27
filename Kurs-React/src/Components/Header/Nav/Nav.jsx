import './Nav.css'
import ContactAndPortfolio from './ContactAndPortfoliComponents'

export default function Nav() {
  return (
    <nav>
      <ContactAndPortfolio nameContact="Contact"></ContactAndPortfolio>
      <ContactAndPortfolio nameContact="Portfolio"></ContactAndPortfolio>
    </nav>
  )
}
