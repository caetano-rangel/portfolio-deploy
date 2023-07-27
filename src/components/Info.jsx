import '../styles/components/info.sass';
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const Info = () => {
  return <section id="information">
  <div className="info-card">
    <AiFillPhone id="phone-icon" />
    <div>
      <h3>Telefone</h3>
      <p>(11)97671-2615</p>
    </div>
  </div>
  <div className="info-card">
    <AiOutlineMail id="email-icon" />
    <div>
      <h3>E-mail</h3>
      <p>caetano.rangel22@gmail.com</p>
    </div>
  </div>
  <div className="info-card">
    <AiFillEnvironment id="pin-icon" />
    <div>
      <h3>Localização</h3>
      <p>Porto Seguro / BA</p>
    </div>
  </div>
</section>
}

export default Info