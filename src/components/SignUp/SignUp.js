import React ,{useState} from 'react';
import Swal from 'sweetalert2';


const SignUp =({onRouteChange}) => {

const [username,setUsername] =useState('');
const [password,setPassword] =useState('');
const [firstName,setFirstName] =useState('');
const [lastName,setLastName] =useState('');
const [email,setEmail] =useState('');


const onSubmitSignUp = (event) => {
	event.preventDefault();
    fetch('http://localhost:5000/api/created', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: username,
        password: password,
        firstName:firstName,
        lastName:lastName,
        email:email
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
			      

			      <div className="tc mv3 input-container">
			        <input className="system serif tc pa2 ba w-80" 
			        type="firstName" 
			        name="firstName" 
			        placeholder="First Name"
			        id="firstName"
			        value={firstName}
			        onChange={e => setFirstName(e.target.value)}
			        />
			      </div>

			      <div className="tc mv3 input-container">
			        <input className="system serif tc pa2 ba w-80" 
			        type="lastName" 
			        name="lastName" 
			        placeholder="Last Name"
			        id="lastName"
			        value={lastName}
			        onChange={e => setLastName(e.target.value)}
			        />
			      </div>

			      <div className="tc mv3 input-container">
			        <input className="system serif tc pa2 ba w-80" 
			        type="email" 
			        name="email" 
			        placeholder="Email"
			        id="email"
			        value={email}
			        onChange={e => setEmail(e.target.value)}
			        />
			      </div>

			      <div className="tc input-container">
			        <input className="system serif tc pa2 ba w-80" 
			        type="name" 
			        name="username" 
			        placeholder="Username" 
			        id="username"
			        value={username}
			        onChange={e=> setUsername(e.target.value)}
			        />

			      </div>
			      <div className="tc mv3 input-container">
			        <input className="system serif tc pa2 ba w-80" 
			        type="password" 
			        name="password" 
			        placeholder="Password"
			        id="password"
			        value={password}
			        onChange={e => setPassword(e.target.value)}
			        />
			      </div>
			      
			    </fieldset>
			    <div className="tc">
			      <input className="system serif br-pill white b ph3 pv2 input-reset ba b--white-50 bg-transparent grow pointer f6 dib" 
			      type="submit" 
			      value="connect"
			      onClick={onSubmitSignUp}
			      />
			    </div>
			  </form>
			</div>
		</article>
		</div>
		)

}
export default SignUp;