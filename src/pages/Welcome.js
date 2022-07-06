import { Route } from 'react-router-dom';

export const Welcome = () => {
	return (
		<>
			<h1>Welcome to my spectacular Page</h1>
			<Route path={'/welcome/new-user'}>
				<p>Welcome my new friend!</p>
			</Route>
		</>
	);
};
