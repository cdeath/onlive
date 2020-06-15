import React from 'react';
import Header from 'components/Header';
import Background from 'components/Background';
import Slide from 'components/Slide';
import Cart from 'components/Cart';
import Footer from 'components/Footer';
import { api_url } from 'config';
import styles from 'assets/css/Misc.module.css';

class Checkout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			concertId: this.props.match.params.concert_id,
			ticketPrice: this.props.match.params.ticket_price,
			concert: null
		};
	}

	componentDidMount() {
		this.getConcert();
	}

	getConcert() {
		fetch(api_url + 'getConcert.php?id=' + this.state.concertId)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				this.setState({ concert: json });
				// console.log(this.state.concert);
			});
	}

	// selectConcert() {
	// 	this.props.concerts.forEach((element) => {
	// 		if (element.id === this.props.match.params.concert_id) {
	// 			this.setState({ concert: element });
	// 		}
	// 	});
	// }

	render() {
		if (!this.state.concert) {
			return '';
		}
		// console.warn(this.state.concert);
		return (
			<div id="home">
				<Header />
				<main className="top">
					<Background src={this.state.concert.img} alt={this.state.concert.title} />
					<section id={styles.highlight}>
						<Slide concert={this.state.concert} />
					</section>
					<section id={styles.content}>
						<Cart concert={this.state.concert} price={this.state.ticketPrice} />
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}

export default Checkout;
