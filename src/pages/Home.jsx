import CardPrecentacion from '../components/CardPrecentacion'
import Nav from '../components/Nav'
import SectionCustomer from '../components/SectionCustomer'
import HomeBanner from '../components/HomeBanner'

const Home = () => {
  return (
    <div className='w-full min-h-screen h-auto flex flex-col bg-green-100 justify-start items-center gap-5 lg:gap-7'>
      <Nav />
      <HomeBanner />
      <CardPrecentacion />
      <SectionCustomer />
    </div>
  )
}

export default Home
