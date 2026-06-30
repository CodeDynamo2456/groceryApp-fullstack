import './Mainbanner.css'
import Banner from '../assets/Banner.png'
import { Link } from 'react-router-dom'
const MainBanner = () => {
  return (
    <div>
        <img src={Banner} alt="" className='Main-banner md:block'/>
        <div>
            <h2>Freshness You can Trust, Savings You will Love!</h2>
        </div>
        <div>
            <Link> Shop Now   </Link>
        </div>
    </div>
  )
}

export default MainBanner