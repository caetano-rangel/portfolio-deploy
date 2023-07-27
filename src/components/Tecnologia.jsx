import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiPython,
  DiPhp,
  DiReact,
} from "react-icons/di";

import '../styles/components/tecnologias.sass'

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, p: "conhecimento avançado, usado em varios projetos." },
  { id: "css", name: "CSS3", icon: <DiCss3 />, p: "usado como SASS para a construção deste projeto." },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, p: "tecnologia usada em projetos como calculadora de imc, criptografia de cesar..." },
  { id: "python", name: "python.js", icon: <DiPython />, p: "uso em conjunto com python para criação de rotas em back-end." },
  { id: "php", name: "PHP", icon: <DiPhp />, p: "linguagem que aprendi na faculdade, muito utilizada." },
  { id: "react", name: "React", icon: <DiReact />, p: "tecnologia usada para a execução deste projeto, e outros projetos com React Native." },
];

const Tecnologia = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.p}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tecnologia