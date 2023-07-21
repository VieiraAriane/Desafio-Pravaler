
import { Link } from "react-router-dom";
import { Header } from "../../Componentes/Header/header";
import estudante from "../../Imagens/estudante.png";
import vantagens from "../../Imagens/vantagens.png";
import porquinho from "../../Imagens/porquinho.png";
import "./pagina-inicial.css";


const PaginaInicial = ()=>{
    return (
        <>
        
        <div>
        <Header />
        <div className="container-inicial">
            <p className="texto-convite">
                Pensando no seu futuro?
                Vem com a gente!
            </p>
            <p className="texto-resposta">
                Aqui você pode comparar cursos de diversas formas.
            </p>
            <div className="container-comparador">
        <Link className="link-texto" to="/comparador">Quero comparar</Link>
      </div>
        </div>

        <picture className="estudante">
            <img className="estudantePravalente" src={estudante} alt="Mulher lendo livro" />
        </picture>
        
        <section id="o-pravaler">
        <div className="container-pravaler">
            <h1 className="titulo-pravaler">O Pravaler</h1>

          <picture className="vantagens">
            <img className="vantagensPravalente" src={vantagens} alt="Quadro de aviso com vantagens Pravaler" />
          </picture>
          <div className="container-texto">
          <p>Mais que atender um mercado, no Pravaler a gente persegue um ideal: “Tornar a educação acessível para quem quer transformar a própria história, transformar sua comunidade, o seu país e o mundo”. Aqui, nosso sonho é tão grande quanto o seu, seja você aluno ou Instituição de Ensino.
           Nos esforçamos para entender os desafios de quem tem a educação como valor e sabe como ela pode transformar vidas. É pra essas pessoas que trabalhamos e ajudamos a construir caminhos para quem quer vencer. A gente acredita que a educação tem que ser pra todo mundo e não medimos esforços para que isso seja uma realidade!</p>
        </div>
        </div>
        </section> 

        <section id="financiamento">
        <div className="container-financiamento">
            <h1 className="titulo-financiamento">Financiamento</h1>
            <p className="texto">O Pravaler é o maior financiamento estudantil privado no Brasil.
            Uma edfintech 100% digital e sem burocracia, que quer potencializar a educação através de parcelas muito menores da sua faculdade e com muito mais tempo pra pagar.</p>
            <picture className="porquinho">
            <img className="porquinhoPravalente" src={porquinho} alt="Cofrinho azul de porquinho" />
            </picture>
        </div>
        </section>  

        <section id="duvidas">
        <div className="container-duvidas">
            <h1 className="titulo-duvidas">Dúvidas</h1>
            <p className="pergunta-duvidas">Como funciona o financiamento estudantil?</p>
            <p className="resposta-duvidas">Com o Pravaler, você tem mais tempo para pagar o valor total da sua mensalidade, fazendo com que o valor das parcelas fique bem menor.
            Em geral, o que você teria que pagar em 6 meses para a faculdade, poderá pagar em 12 meses com a contratação do financiamento do Pravaler.</p>

            <p className="pergunta-duvidas">Como ficam as parcelas? ?</p>
            <p className="resposta-duvidas">A contratação é semestral, assim você pode optar por renovar com a gente no semestre seguinte ou não. E como ficam as parcelas do próximo semestre? 
            Elas não se acumulam, você só começará a pagar o semestre seguinte depois que terminar de pagar o semestre anterior. </p>

            <p className="pergunta-duvidas">Pra quem é o Pravaler?</p>
            <p className="resposta-duvidas">✔ É um financiamento estudantil para calouros e veteranos.
            <br />
             ✔ É para quem quer ter a flexibilidade de contratar em qualquer semestre do curso e a qualquer momento do ano.
             <br />
             ✔ É para quem tem bolsa de estudo ou pra quem não tem. Sim, se você já tem uma bolsa de estudo negociada com a 
            instituição de ensino, pode financiar o valor restante, dependendo do combinado com a faculdade.
            <br />
            ✔ É pra quem fez ENEM e pra quem não fez.
            <br />
            ✔ É para quem tem conta em banco e para quem não tem.
            <br />
            ✔ O Pravaler é para todos!</p>
            
        </div>
      
        </section> 
            
         
        </div>
        </>
    )
}   

export default PaginaInicial;