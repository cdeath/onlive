import React from 'react';
import Header from 'components/Header';
import Background from 'components/Background';
import Slide from 'components/Slide';
import ConcertDetail from 'components/ConcertDetail';
import Footer from 'components/Footer';
import { api_url } from 'config';
import styles from 'assets/css/Misc.module.css';

class Concert extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			concertId: this.props.match.params.id,
			concert: null,
			ticketStatus: 0,
			progressBar: 0
		};
		// console.log(this.props.match.params.id);
		// this.ticketsStatus = this.ticketsStatus.bind(this);
	}

	componentDidMount() {
		this.getConcert();
		this.getPriceList();
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

	getPriceList() {
		fetch(api_url + 'getPriceList.php?id=' + this.state.concertId)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				this.setState({ priceList: json });
				// console.log(this.state.priceList);
			});
	}

	render() {
		if (!this.state.concert) {
			return '';
		}
		// console.log(this.state.concert);
		return (
			<div id="home">
				<Header />
				<main className="top">
					<Background concert={this.state.concert} />
					<section id={styles.highlight}>
						<Slide concert={this.state.concert} />
					</section>
					<section id={styles.content}>
						<ConcertDetail concert={this.state.concert} prices={this.state.priceList} />
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}

export default Concert;
