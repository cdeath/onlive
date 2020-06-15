import React from 'react';
import { api_url } from 'config';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Card from 'components/Card';
import Svg from 'components/Svg';
import styles from 'assets/css/Search.module.css';

class Checkout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: []
		};
		this.search = this.search.bind(this);
	}

	componentDidMount() {
		document.querySelector('#search-field').focus();
	}

	search(e) {
		e.preventDefault();

		// get search terms from form
		var terms = document.querySelector('#search-field').value;

		fetch(api_url + 'search.php?query=' + terms)
			.then((response) => {
				console.warn(api_url + 'search.php?query=');
				return response.json();
			})
			.then((json) => {
				this.setState({ search: json });
			});
	}

	render() {
		// console.warn(this.state.search);

		if (this.state.search === []) {
			return '';
		}
		return (
			<div id="home">
				<Header />
				<main className="top">
					<section id={styles.contentSearch}>
						<div id={styles.searchArea}>
							<form onSubmit={this.search} onChange={this.search}>
								<input type="text" name="search-field" id="search-field" />
								<button>
									<Svg href={'#i-search-svg'} />
								</button>
							</form>
							<div className={styles.cardContainer}>
								{this.state.search.map((item, i) => {
									// console.log(item);
									return <Card concert={item} key={i} />;
								})}
							</div>
						</div>
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}

export default Checkout;
