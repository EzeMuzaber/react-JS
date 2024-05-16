import { Link } from "react-router-dom";
function Footer() {
	return (
		<footer className="bg-gray-800 text-lg text-white">
			<div className="container flex flex-col md:p-1 lg:flex-row dark:divide-gray-300">
				<ul className="self-center py-4 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
					<li className="text-green-600 font-bold">𓆩『𝐿Ꭷ𝓚 𝒊』𓆪</li>
					<Link to="/Home" className="mr-4">Inicio</Link>
					<Link to="/Personajes" className="mr-4">Personajes</Link>
					<Link to="/MundoPelis" className="mr-4">Mundo Pelis</Link>
					<Link to="/MundoSeries" className="mr-4">Mundo Series</Link>
					<Link to="/Carrito" className="mr-4">Carrito</Link>
					<Link to="/Contacto" className="mr-4">Contacto</Link>
				</ul>
			</div>
			<div className="flex items-center justify-center text-sm">
				<span className="dark:text-gray-600">© Copyright 2024 - Ezequiel Muzaber </span>
			</div>
		</footer>
	)
}
export default Footer
