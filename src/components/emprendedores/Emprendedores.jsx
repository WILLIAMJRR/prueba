import { useState } from 'react';
import './emprendedores.css';
import { useEffect } from 'react';

const Emprendedores = () => {
	const [users, setUsers] = useState();
	console.log(users);
	const url = 'https://randomuser.me/api/?results=3';
	const getUsers = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setUsers(data.results);
		} catch (err) {
			console.log('error');
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<section className='section'>
			<h2 className='subtitle'>Conoce a algunos de nuestros emprendedores destacados</h2>
			<div className='emprededores_cards'>
				{users?.map(user => (
					<div key={user.login.uuid} className='emprededor_card'>
						<div className='card__img'>
							<img className='card__image' src={user.picture.medium} alt='' />
						</div>
						<div className='card__content'>
							<h3>
								{user.name.first} {user.name.last}
							</h3>
							<span>{user.email}</span>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum numquam placeat
								expedita aliqu
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Emprendedores;
