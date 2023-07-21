import { useNavigate } from "react-router-dom";

import logo from "../../Imagens/logo.png";
import "./header.css"


export const Header = () => {
  const navigate = useNavigate();
  const handlePaginaInicial = () => navigate("/");

  return (
    <header className="header">
      <picture className="logo">
      <button className="button-header" onClick={handlePaginaInicial}>
        <img className="logo-pravaler" src={logo} alt="logo Pravaler"/></button>
      </picture>
      
      <nav className="principal">
        <ul className="link-header">
        <a className="link-nav" href="#o-pravaler">O Pravaler</a>
        </ul>
        <ul className="link-header">
        <a className="link-nav" href="#financiamento">Financiamento</a>
        </ul>
        <ul className="link-header">
        <a className="link-nav" href="#duvidas">Dúvidas</a>
        </ul>
       </nav>      
  
    </header>
  )
}