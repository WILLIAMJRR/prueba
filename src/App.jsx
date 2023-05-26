import { useState } from 'react';
import './App.css';
import About from './components/about/About';
import Emprendedores from './components/emprendedores/Emprendedores';
import Form from './components/form/Form';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';

function App() {
	const [theme, setTheme] = useState('dark');
	return (
		<div className='light_mode'>
			<Navbar key={'dark'} theme={theme} setTheme={setTheme} />
			<About />
			<Emprendedores />
			<Form />
      <Footer/>
		</div>
	);
}

export default App;
