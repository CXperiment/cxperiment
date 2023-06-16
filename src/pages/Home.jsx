import CardPrecentacion from '../components/CardPrecentacion'
import Nav from '../components/Nav'
import HomeBanner from '../components/HomeBanner'

import Contacto from '../components/Contacto'
import CardListContenido from '../components/CardListContenido'
import Titulo from '../components/Titulo'
import FlipCardComp from '../components/FlipCardComp'

const Home = () => {
  return (
    <div className='w-full min-h-screen h-auto flex flex-col bg-white justify-start items-center'>
      <Nav />
      <HomeBanner />
      <section className='w-full h-auto flex flex-col bg-white justify-start items-center gap-10 lg:gap-20'>
        <CardPrecentacion />
        <Titulo titulo='Servicios' />
        <FlipCardComp />
        <Titulo titulo='Descubrí los beneficios de trabajar juntos' />
        <CardListContenido />
        <Contacto />
      </section>
    </div>
  )
}

export default Home
