import './footer.css';
import facebook from '../../assets/img/facebook-svgrepo-com.svg';
import linkedin from '../../assets/img/linkedin-svgrepo-com.svg';
import github from '../../assets/img/github-svgrepo-com.svg';

const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<p>Hecho por William Rodriguez. Todos los derechos reservados.</p>
				<div className='social-links'>
					<a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
						<img className='footer_img' src={linkedin} alt='' />
					</a>
					<a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
						<img className='footer_img' src={facebook} alt='' />
					</a>
					<a href='https://github.com/' target='_blank' rel='noopener noreferrer'>
						<img className='footer_img' src={github} alt='' />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
