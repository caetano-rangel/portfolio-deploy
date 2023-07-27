import Avatar from '../img/caetano.jpeg'
import '../styles/components/sidebar.sass'
import Info from './Info'
import SocialNet from './SocialNet'
import pdf from '../pdf/curriculo.pdf'

const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Caetano Rangel" />
    <p className="title">Desenvolvedor</p>
    <SocialNet />
    <Info />
    <a href={pdf} target='blank' className="btn">Ver Curriculo</a>
  </aside>
}

export default Sidebar