import { Link } from 'react-router-dom';
export const Products = () => {
	return (
		<>
			<h1> This is the products Page</h1>
			<ul>
				<li>
					<Link to='/products/unlibro'>Un libro</Link>
				</li>
				<li>Una cuerda de escalada</li>
				<li>Monkey feet</li>
				<li>Una California</li>
			</ul>
		</>
	);
};
