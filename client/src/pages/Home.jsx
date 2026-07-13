import Categories from "../componets/Categories"
import MainBanner from "../componets/MainBanner"

const Home = () => {
  return (
    <div className="mt-2">
        <MainBanner></MainBanner>
        <Categories></Categories>
    </div>
  )
}

export default Home