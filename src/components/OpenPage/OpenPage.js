import React, {useState, useEffect} from 'react';
import { List, Image } from 'semantic-ui-react';
import './OpenPage.css';

const OpenPage =({onRouteChange}) => {

	const [users, setUsers] = useState([]);
	const [username,setUsername] =useState('');
	const [password,setPassword] =useState('');
	const [firstName,setFirstName] =useState('');
	const [lastName,setLastName] =useState('');
	const [email,setEmail] =useState('');
	const avatars = [
		"https://react.semantic-ui.com/images/avatar/small/christian.jpg",
		"https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
		"https://react.semantic-ui.com/images/avatar/small/stevie.jpg",
		"https://react.semantic-ui.com/images/avatar/small/joe.jpg",
		"https://react.semantic-ui.com/images/avatar/small/veronika.jpg",
		"https://react.semantic-ui.com/images/avatar/small/jenny.jpg",
		"https://react.semantic-ui.com/images/avatar/small/nan.jpg"
	];

	useEffect(() => {
		fetch("http://localhost:5000/api/users")
		.then(res => {
			return res.json();
		}).then(users => {
			console.log(users);
			setUsers(users.data)
		}).catch(err => {
			console.log(err);
		})
	},[])


return(
	<div className='tc pointer' >

		  <List divided size='massive'>
		   {users.map((chat,index) => 
		   	<List.Item key={index}>
					<List.Content>
					<div className='len'>
						<Image avatar src={avatars[index]} />
						<List.Header>{chat.username}</List.Header>
						<List.Description>{chat.firstName}</List.Description>
						<List.Description>{chat.lastName}</List.Description>
						<List.Description>{chat.email}</List.Description>
					</div>
					</List.Content>
			</List.Item>)}
		 </List>
	 </div>
	)

}
export default OpenPage;