import React from 'react';
import Header from 'components/Header';
import Slideshow from 'components/Slideshow';
import ContentList from 'components/ContentList';
import Footer from 'components/Footer';
import styles from 'assets/css/Misc.module.css';

class Home extends React.Component {
	render() {
		return (
			<div id="home">
				<Header />
				<main className="top">
					<section id={styles.highlight}>
						<Slideshow slides={this.props.slides} />
					</section>
					<section id={styles.content}>
						<ContentList concerts={this.props.concerts} />
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}

export default Home;
