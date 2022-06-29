import './style.css'
import {Link} from 'react-router-dom'
export default function Log() {
  return (
    <div className='container-login'>
      <div className="title-login">
      <h1>Anime Link</h1>
      </div>
      <img className="tskuyomi"  src="https://i1.sndcdn.com/artworks-YA8iqChFHR2deYeR-bWsF2g-t500x500.jpg" alt="tsukuyomi-infinito" />
      <div className="text-login">
      <p>Comece hoje a salvar os links dos seus animes prefiridos e nunca mais os perca</p>
      </div>
      <button className="login-button">
      <Link className='link' to='/Home'>
        Entrar
      </Link>
        </button>
    </div>
  )
}
