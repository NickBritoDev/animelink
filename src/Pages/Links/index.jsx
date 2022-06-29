import './style.css'
import { Link } from 'react-router-dom';
import { TbTrash, TbUnlink } from "react-icons/tb";
import kunai from './images/kunai.png'
export default function Links() {
  return (
    <div className="container-link">

      <div className="link-header">
        <Link to='/Home'>
        <img src={kunai} alt="voltar" />
        </Link>

        <h3>Meus Animes</h3>
      </div>

      <div className="link-item">
        <button className="link-button">
          <TbUnlink className='link-icon' />
          https://www.crunchyroll.com/pt-br/naruto-shippuden?utm_source=paid_cr&utm_medium=google-search&utm_campaign=conversion&utm_term=crunchyroll&referrer=paid_cr_google-search_conversion&gclid=Cj0KCQjw8O-VBhCpARIsACMvVLNEZY20zhlaOYl1fbaCa-JokL4PQFCaJPT0rHZ7U3p2f1VI9ybs7y8aAugDEALw_wcB
        </button>
        <button className="trash-button">
          <TbTrash/>
        </button>
      </div>

    </div>
  )
}
