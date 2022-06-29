import { TbUnlink } from "react-icons/tb";
import { Link } from "react-router-dom";
import './style.css'
import FavoriteButton from "../../components/favorites";
import { useState } from "react";
import Modal from "../../components/Modal";
import api from '../../services/api'

export default function Home() {
  //responsavel por capturar e armazenar o que for digitado no campo input
  const [input, setInput] = useState('')
  //responsavel pela renderização do modal 
  const [modal, setModal] = useState(false)
  //responsavel por buscar e armazenar o retorno da api
  const [data, setData] = useState({})

  //responsavel por encurtar, salvar e apresentar um modal na tela para o usuario ter acesso ao link em todas as suas versões
  async function SaveAndShortener(){
    //ao clicar no botão trocamos a condição que antes era false para true sendo assim renderizado na tela o modal ou a msg de erro caso não tenha nada ocupando o input
      const resp = await api.post('/shorten', {
        long_url: input
      })
      //limpa o campo de pesquisa automaticamente apos o uso do usuario
      setInput('')
      //entrega para a resp a requisição da api dentro do "data"
      setData(resp.data)
      //abre o modal caso esteja tudo ok
      setModal(true)
    try{
    }catch{
      //abre um alert caso algo de errado
      alert("Algo deu errado. Por favor, tente novamente ! 😅​")
      //limpa o campo de pesquisa automaticamente apos o uso do usuario
      setInput('')
    }
  }

  return (
    <div className="container-home" >
      
      <div className="logo">
      <h1>Anime Link</h1>
      <img className="tskuyomi" src="https://i1.sndcdn.com/artworks-YA8iqChFHR2deYeR-bWsF2g-t500x500.jpg" alt="tsukuyomi-infinito" />
      </div>

      <div className="input">
      <p>Cole Aqui o Link Daquele Site que Você não Pode Perder ! 👇🏻​</p>
        <div>
          <TbUnlink className="icon-link"/>
          <input 
          //atribui o valor digitado ao "input"
          value={input}
          //busca o valor digitado no campo input
          onChange={(e) => setInput(e.target.value)}          
          type="text" 
          placeholder="Cole o link para favoritar..." />
        </div>
        <button
        onClick={SaveAndShortener}
        className="button-home" >
        Salvar Anime
        </button>
      </div>
        <Link className="Link" to='/Links'>
        <FavoriteButton/> 
        </Link>

        {modal && (
          <Modal
          //responsavel por enviar para o modal os valor do "data"
          content={data}
          //reposnavel por mudar a condição de abertura do modal realizando assim seu fechamento
          closeModal={() => setModal(false)}/>
        )}
    </div>
  )
}
