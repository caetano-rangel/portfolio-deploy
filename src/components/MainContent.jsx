import '../styles/components/maincontent.sass'
import About from './About'
import Tecnologia from './Tecnologia'
import Projetos from './Projetos'

const MainContent = () => {
  return (
    <main id='main-content'>
      <About />
      <Tecnologia />
      <Projetos />
    </main>
  )
}

export default MainContent