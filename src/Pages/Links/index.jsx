import './style.css';
import kunai from './images/kunai.png';
import Modal from '../../components/Modal';
import { TbTrash, TbUnlink, TbHome } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {getLinksave, deleteLink} from '../../services/storage';

export default function Links() {
  //inicia como array vazia para buscar o itens no local storage
  const [myLinks, setMyLinks] = useState([]);
  //inicia como um objeto vazio e armazena url cliacada para apresentar no modal
  const [data, setData] = useState({});
  //abre o modal
  const [modal, setmodal] = useState(false);
  //faz o controle de vazio na lista para apresentar outro modal renderizado condicionalmente
  const [openNoLinks, setOpenNoLinks] = useState(false);

  useEffect(() => {
    async function getLinks(){
      const result = await getLinksave('@animelink');
      if(result.length === 0){
        //caso a lista esteja vazia
        setOpenNoLinks(true);
      }
      setMyLinks(result);
    }
    getLinks();
  }, []);

  //abre o modal com o link selecionado
  function openModal(link){
  setData(link);
  setmodal(true);
  };

  //deleta um link
  async function handleDelete(id){
    const result = await deleteLink(myLinks, id);

    if(result.length === 0){
      setOpenNoLinks(true);
    }
    setMyLinks(result);
  };

  return (
    <div className="container-link">

      <div className="link-header">
        <Link to='/Home'>
        <img src={kunai} alt="voltar" />
        </Link>

        <h3>Meus Animes</h3>
      </div>

      {openNoLinks && (
        <div className="back">
          <h1>lista vazia</h1>
          <div className="lista-vazia">
            <h3>Anime Link</h3>
          <p>Comece hoje a salvar os seus sites favoritos de anime e nunca mais perca um episodio ! </p>

          <Link to='/Home'>
          <button 
          className="button-lista">
          Home 
          <TbHome/> 
          </button>
          </Link>
          </div>
        </div>
      )}

    {myLinks.map (link => (
        <div key={link.id} className="link-item">
        <button 
        onClick={() => openModal(link)}
        className="link-button">
          <TbUnlink className='link-icon' />
          {link.long_url}
        </button>
        <button 
        onClick={() => handleDelete(link.id)}
        className="trash-button">
          <TbTrash/>
        </button>
      </div>
    ))}
    
    {modal && (
      <Modal
      //fecha o modal
      closeModal={() => setmodal(false)}
      //responsavel pelo que sera renderizado no modal
      content={data}/>
    )}

    </div>
  )
};
