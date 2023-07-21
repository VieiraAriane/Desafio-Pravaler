import { Header } from "../../Componentes/Header/header"
import InputForm from "../../Componentes/InputForms/inputForms";
import { useState} from "react";
import { Botao } from "../../Componentes/Botao/botao";
import "./cadastro.css";

const Cadastro = ()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
  
    
    return (
        <>
            <Header />
      <section id="form-register">
            
      <form className="container-form">
          <h2 className="form-titulo">Dados do estudante</h2>
      <div>
      
          <InputForm 
            type="text"
            placeholder="NOME COMPLETO"
            value={name}
            onChange={(e) => setName(e.target.value)}
            
          />
      </div>
      <div>
          <InputForm
            type="email"
            placeholder="E-MAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
          <InputForm
            type="tel"
            placeholder="TELEFONE"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          
          <Botao
                  className="button-menu button"
                  classNameContainer="button-container-left button-container"
          >Enviar Proposta
          </Botao>      
        </form>
       
      </section>
    </>
  );
};

export default Cadastro;

