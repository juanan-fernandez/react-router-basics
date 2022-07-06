import { useParams } from 'react-router-dom';

export const ProductDetail = () => {
	const params = useParams();
	console.log(params);
	return (
		<>
			<h2>Product detail page</h2>
			<p>{params.productId}</p>
		</>
	);
};
