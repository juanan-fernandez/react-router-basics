import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
export const NavBar = () => {
	return (
		<header className={styles.header}>
			<ul>
				<li>
					<NavLink activeClassName={styles.active} to='/welcome'>
						Welcome
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName={styles.active} to='/products'>
						Products
					</NavLink>
				</li>
			</ul>
		</header>
	);
};
