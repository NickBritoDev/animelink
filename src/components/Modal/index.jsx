import './style.css';
import { TbCopy } from "react-icons/tb";
import shuriken from './images/shuriken.png';

export default function Modal({closeModal, content}) {
  //responsavel pela copia do link atravez de um click
  async function copyUrl(){
    await navigator.clipboard.writeText(content.link)
    alert("Link copiado com sucesso, divirta-se 😅")
  };

  return (
    <div className="container-modal" >
        <div className="wrapper-modal">

        <div className="modal-header">
        <h3>Anime Link</h3>
        <button 
        //fecha o modal
        onClick={closeModal} 
        className="shuriken">
            <img  
            className="shuriken-icon" 
            src={shuriken} 
            alt="botão para fechar o modal" />
        </button>
        </div>

        <span>{content.long_url}</span>

        <button 
        onClick={copyUrl}
        className="modal-copy">
        {content.link}
            <TbCopy/>
        </button>
        </div>
    </div>
  )
};
