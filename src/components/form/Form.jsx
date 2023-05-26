import './form.css';
const Form = () => {
	return (
		<section className='section'>
			<h2 className='form_title' >Contacto</h2>
			<form className='form-container'>
				<div className='form-group'>

					<input type='text' id='nombre' name='nombre' placeholder='Nombre' required />
				</div>

				<div className='form-group'>

					<input type='text' id='apellido' name='apellido' placeholder='Apellido' required />
				</div>

				<div className='form-group'>
					<input type='email' id='email' name='email'placeholder='Email' required />
				</div>

				<div className='form-group'>

					<input type='tel' id='celular' name='celular' pattern='[0-9]{10}' placeholder='Numer de celular' required />
					<small>Incluye el código de área</small>
				</div>

				<div className='form-group'>

					<input type='tel' id='telefono' name='telefono' pattern='[0-9]{7,}' placeholder='Numero de celular' required />
					<small>Ingresa un número válido</small>
				</div>

				<div className='form-group'>
					<button type='submit'>Enviar</button>
				</div>
			</form>
		</section>
	);
};

export default Form;
