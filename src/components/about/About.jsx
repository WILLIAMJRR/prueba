import quienesSomos from './../../assets/img/quienes_somos.jpg';
import unionComunidad from '../../assets/img/Comunidades-virtuales.jpg';
import Comunidad from '../../assets/img/blog-comunidad-virtual-enero-2021.jpg';
import emprender from '../../assets/img/emprender_1.png';
import portada from '../../assets/img/emprendedores.jpg';
import './about.css';
const About = () => {
	return (
		<section className='about' >
			<div className='portada'>
				<div className='portada_text'>
					<h1 className='title'>
						Bienvenido a la Comunidad <br /> de Emprendedores
					</h1>
					<h2 className='subtitle'>Únete a nuestra comunidad</h2>
				</div>
				<div>
					<img className='portada_img' src={portada} alt='' />
				</div>
			</div>
			<div className='cards' id='about' >
				<div className='card_one'>
					<div className='card '>
						<div className='card_text'>
							<h2>¿ Quienes Somos ?</h2>
							<p>
								Somos una comunidad dedicada a apoyar y potenciar el éxito de emprendedores en todas
								las etapas de su viaje empresarial. Nuestro objetivo es brindar un espacio
								colaborativo donde puedas aprender, crecer y conectar con otros emprendedores
								apasionados.
							</p>
							<a
								className='custom-btn'
								href='https://www.bsale.cl/'
								target='_blank'
								rel='noopener noreferrer'
							>
								ver mas
							</a>
						</div>
						<img className='card_img' src={quienesSomos} alt='quienes somos' />
					</div>
				</div>
				<div className='card_two'>
					<div className='card'>
						<div className='card_text'>
							<h2>¿ Por que unirte ?</h2>
							<p>
								Al unirte a nuestra comunidad, tendrás acceso a una amplia variedad de recursos,
								herramientas y eventos exclusivos que te ayudarán a impulsar tu negocio. Nuestro
								contenido incluye guías prácticas, estudios de casos de éxito, webinars informativos
								y mucho más.
							</p>
							<a
								className='custom-btn'
								href='https://www.bsale.cl/'
								target='_blank'
								rel='noopener noreferrer'
							>
								ver mas
							</a>
						</div>
						<img className='card_img' src={unionComunidad} alt='quienes somos' />
					</div>
				</div>
				<div className='card_three'>
					<div className='card'>
						<div className='card_text'>
							<h2>! interectua con la comunidad ¡</h2>
							<p>
								Además, podrás interactuar con otros emprendedores, compartir ideas innovadoras,
								recibir retroalimentación constructiva y establecer conexiones valiosas. La
								colaboración y el intercambio de conocimientos son fundamentales en nuestra
								comunidad, ya que creemos en el poder del networking y la sinergia entre
								emprendedores.
							</p>
							<a
								className='custom-btn'
								href='https://www.bsale.cl/'
								target='_blank'
								rel='noopener noreferrer'
							>
								ver mas
							</a>
						</div>
						<img className='card_img' src={Comunidad} alt='quienes somos' />
					</div>
				</div>
				<div className='card_four'>
					<div className='card'>
						<div className='card_text'>
							<h2>Tu primer proyecto es importante para nosotros</h2>
							<p>
								No importa si estás comenzando tu primer proyecto o si ya tienes experiencia en el
								mundo empresarial, nuestra comunidad está abierta a todos los emprendedores
								entusiastas que deseen crecer personal y profesionalmente. Juntos, podemos superar
								desafíos, celebrar logros y construir un ecosistema emprendedor próspero y
								colaborativo.
							</p>
							<a
								className='custom-btn'
								href='https://www.bsale.cl/'
								target='_blank'
								rel='noopener noreferrer'
							>
								ver mas
							</a>
						</div>
						<img className='card_img' src={emprender} alt='quienes somos' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
