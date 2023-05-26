/* eslint-disable react/prop-types */
import './nav.css';
import './menu.css';
import './bgmenu.css';
import moon from '../../assets/img/moon-svgrepo-com (2).svg';
import sun from '../../assets/img/sun-svgrepo-com (1).svg';
import { useState } from 'react';

const Navbar = ({ setTheme, theme }) => {
	const [clicked, setclicked] = useState(false);
	const [show, setShow] = useState('ligth');

	const handleClick = () => {
		setclicked(!clicked);
	};

	const handleThemeSwitch = () => {
		const newTheme = show === 'light' ? 'dark' : 'light';
		setShow(newTheme);
		const dark_mode = document.querySelector('.light_mode');

		const isDarkTheme = theme === '.light_mode';
		if (isDarkTheme) {
			dark_mode.classList.add('dark_mode');
			setTheme('.dark_mode');
		} else {
			dark_mode.classList.remove('dark_mode');
			setTheme('.light_mode');
		}
	};

	return (
		<header>
			<nav>
				<h3 className='logo'>Emprendedor</h3>
				<div className='show_nav'>
					<button onClick={handleThemeSwitch} className='btn_dark'>
						{show === 'dark' ? (
							<img className='img_dark' src={sun} alt='sun' />
						) : (
							<img className='img_dark' src={moon} alt='moon' />
						)}
					</button>
					<div className={`nav_link ${clicked ? 'active' : ''}`}>
						<a onClick={handleClick} href='#home'>
							Home
						</a>
						<a onClick={handleClick} href='#about'>
							About
						</a>
						<a onClick={handleClick} href='#'>
							Emprendedores
						</a>
						<a onClick={handleClick} href='#'>
							Contacto
						</a>
					</div>
				</div>
				{/* menu */}
				<div className='menu'>
					<div onClick={handleClick} className={`icon nav-icon-5 ${clicked ? 'open' : ''}`}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div className={`menu_background initial ${clicked ? 'active' : ''}`}></div>
			</nav>
		</header>
	);
};

export default Navbar;
