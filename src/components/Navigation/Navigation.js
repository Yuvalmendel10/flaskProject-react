import './Navigation.css';
import Connect from './user.png';

const Navigation = ({onRouteChange,route}) => {

	

	if (route==='signin')
	{
		return(
			<div className='new'>
				<p className='white br3 ma3 pointer link dim black b' 
					onClick={() => onRouteChange('signup') } >don't have an account? click here </p>
			</div>
				
		)
	}

	else {

	return(

		<div className='feli' >
			<div className='' onClick={() => onRouteChange('signin') }> 
			<img className='f6 mb0 mt2 ml4  pointer link dim black b'
			src= {Connect} alt='connect' height='30px' weight='30px'/>
			<p className='f6 mt0 ml3 pointer link dim black b'>
			sign in  
			</p>
			</div>
		</div>
	)

}

}

export default Navigation;