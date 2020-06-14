import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Svg from 'components/Svg';
import styles from 'assets/css/Header.module.css';
import { classNames } from 'utils';

export default () => { 
	const [nav, toggleNav] = useState(false);
	return <header id={styles.header}>
		<Link to="/" id={styles.logo}>
			<Svg href="#logo-svg" />
		</Link>
		<div className={styles.buttons}>
			<button id={styles.menu} onClick={() => toggleNav(!nav)}>
				<Svg href="#i-menu-open-svg" />
			</button>
			<Link to="/search/" id={styles.search}>
				<Svg href="#i-search-svg" />
			</Link>
		</div>
		<nav id={styles.nav} className={classNames({reveal: nav})}>
			{/* <NavLink to="/home" className="selected">Concerts</NavLink> */}
			<NavLink to="/home">Concerts</NavLink>
			<NavLink to="/about/">About</NavLink>
			<NavLink to="/arena/">Enter Arena</NavLink>
		</nav>
	</header>;
}

export default Intro;
