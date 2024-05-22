import axios from 'axios';
import './myacc.css'
import { useParams } from "react-router-dom"; 
const Verify = () => {

    const { id } = useParams();
        console.log(id)
        const handleVerfy=()=>{
            axios.get(`http://localhost:3001/verify-email?token=${id}`).then(result=>console.log(result)).catch(err=>console.log(err))

        }
  return (
    <div>
          <div>
      <div className="profile-container">
  <div className="control-label photo-label">
    <img src="https://us04st2.zoom.us/static/93873/image/user.png"    alt="изменить изображение профиля"/>
    <div className="pic-action"><a href="">User Name</a></div>
  </div>
  <div className="form-control-static"><p className="fullName">User Name</p></div>
<div className="row-action">
<a className="edit" href="" data-edit="profile-detail">Detail</a>
</div>
  </div>

<div className="profile-container">
  <div className="control-label">Detail: 1<br/>Address</div>
  <div className="form-control-static"> 
    <p className="Mnumber">811-592-8028</p>
    <p className="Murl">https://us04web.zoom.us/j/8115928028</p>
    <p className="instant">Lorem ipsum dolor sit amet.</p>
  </div>
  <div className="row-action">
<a className="edit" href="" data-edit="profile-detail">see more</a>
</div>
</div>
<button onClick={handleVerfy} >click to verfy</button>
<div className="profile-container">
  <div className="control-label">Email <br/>вход в систему</div>
  <div className="form-control-static"> 
    <p className="email">izbagov@gmail.ru</p>
    <p className="Murl">Связанные учетные записи:</p>
  </div>
  <div className="row-action">
<a className="edit" href="" data-edit="profile-detail">Редактировать</a>
</div>
</div>
    </div>
    </div>
  )
}

export default Verify