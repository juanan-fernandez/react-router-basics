import { Redirect, Route, Switch } from 'react-router-dom';

//pages and components
import { NavBar } from './components/NavBar';
import { ProductDetail } from './pages/ProductDetail';
import { Products } from './pages/Products';
import { Welcome } from './pages/Welcome';

function App() {
	return (
		<div>
			<header>
				<NavBar />
			</header>
			<main>
				<Switch>
					<Route path='/' exact>
						<Redirect to='/welcome' />
					</Route>
					<Route path='/welcome'>
						<Welcome />
					</Route>
					<Route path='/products' exact>
						<Products />
					</Route>
					<Route path='/products/:productId'>
						<ProductDetail />
					</Route>
					<Route path='/*'>
						<Redirect to='/welcome/new-user' />
					</Route>
				</Switch>
			</main>
		</div>
	);
}

export default App;
