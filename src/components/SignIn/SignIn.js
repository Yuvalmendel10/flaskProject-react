import React ,{useState,useEffect} from 'react';
import './SignIn.css';
import Swal from 'sweetalert2';


const SignIn =({onRouteChange}) => {

const [username,setUsername] =useState('');
const [password,setPassword] =useState('');
const [users, setUsers] = useState([]);

	

const onSubmitSignIn = (event) => {
	event.preventDefault();
    fetch('http://localhost:5000/api/login', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(res => {
      	return res.json();
      	console.log(res)
      })
      .then(user => {
      	console.log(user)
        if (user) {
          onRouteChange('OpenPage');
        }
       
        else{
        	Swal.fire({
			  position: 'top-end',
			  icon: 'error',
			  title: 'אבוי',
			  text: 'error ',
			  showConfirmButton: false,
			  timer: 2000
			})
        	setPassword('');
        }
      })
  }


	return(
		<div>
			
		<article className=" br10 ba dark-gray b--black-10 mv4 w-100  w-25-l  center shadow-5" >
			<div className="grey pa4 black-80">
			  <form className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="system serif tc white f2 fw6 ph0 mh0">התחברות</legend>
			      <p className='b mt0 system serif tc white f4'> ברוך הבא </p>
			      <br />
			      <div className="tc input-container">
			        <input className="system serif tc pa2 ba w-80" 
			        type="name" 
			        name="username" 
			        placeholder="שם משתמש" 
			        id="username"
			        value={username}
			        onChange={e=> setUsername(e.target.value)}
			        />

			      </div>
			      <div className="tc mv3 input-container">
			        <input className="system serif tc pa2 ba w-80" 
			        type="password" 
			        name="password" 
			        placeholder="סיסמה"
			        id="password"
			        value={password}
			        onChange={e => setPassword(e.target.value)}
			        />
			      </div>
			      
			    </fieldset>
			    <div className="tc">
			      <input className="system serif br-pill white b ph3 pv2 input-reset ba b--white-50 bg-transparent grow pointer f6 dib" 
			      type="submit" 
			      value="התחברות"
			      onClick={onSubmitSignIn}
			      />
			    </div>
			  </form>
			</div>
		</article>
		</div>
		)

}
export default SignIn;