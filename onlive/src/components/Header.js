import React from 'react';
import Svg from '../components/Svg';
import styles from 'assets/css/Header.module.css';

class Intro extends React.Component {
	showMenu() {
		document.querySelector('header nav').classList.toggle('reveal');
	}

	render() {
		return (
			<header id={styles.header}>
				<a href="/" id={styles.logo}>
					<Svg href={'#logo-svg'} />
				</a>
				<div className={styles.buttons}>
					<button id={styles.menu} onClick={this.showMenu}>
						<Svg href={'#i-menu-open-svg'} />
					</button>
					<a id={styles.search} href="/search/">
						<Svg href={'#i-search-svg'} />
					</a>
				</div>
				<nav id={styles.nav}>
					{/* <a href="/home" className="selected">
						Concerts
					</a> */}
					<a href="/home">Concerts</a>
					<a href="/about/">About</a>
					<a href="/arena/">Enter Arena</a>
				</nav>
			</header>
		);
	}
}

export default Intro;
