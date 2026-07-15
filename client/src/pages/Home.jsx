import BestSeller from "../componets/BestSeller"
import BottomBanner from "../componets/BottomBanner"
import Categories from "../componets/Categories"
import MainBanner from "../componets/MainBanner"

const Home = () => {
  return (
    <div className="mt-2">
        <MainBanner></MainBanner>
        <Categories></Categories>
        <BestSeller></BestSeller>
        <BottomBanner></BottomBanner>
    </div>
  )
}

export default Home