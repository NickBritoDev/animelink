import { TbUnlink } from "react-icons/tb";
import { Link } from "react-router-dom";
import './style.css'
import FavoriteButton from "../../components/favorites";
export default function Home() {
  return (
    <div className="container-home" >
      
      <div className="logo">
      <h1>Anime Link</h1>
      <img className="tskuyomi" src="https://i1.sndcdn.com/artworks-YA8iqChFHR2deYeR-bWsF2g-t500x500.jpg" alt="tsukuyomi-infinito" />
      </div>

      <div className="input">
      <p>Cole o Link do Seu Anime Aqui Para Salva-lo</p>
        <div>
          <TbUnlink className="icon-link"/>
          <input type="text" placeholder="Cole o link para favoritar..." />
        </div>
        <button
        className="button-home" >
        <Link className="Link" to='/Links'>
          Salvar Anime
        </Link>
          </button>
      </div>
      <FavoriteButton/>
    </div>
  )
}
