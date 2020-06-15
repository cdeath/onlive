import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Intro from 'pages/Intro';
import Home from 'pages/Home';
import Concert from 'pages/Concert';
import Checkout from 'pages/Checkout';
import Search from 'pages/Search';
import About from 'pages/About';
import Arena from 'pages/Arena';
import { api_url } from 'config';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			concerts: [],
			slides: [],
			progressBar: ''
		};
	}

	componentDidMount() {
		this.getConcerts();
		this.getSlides();
	}

	getConcerts() {
		fetch(api_url + '/getConcerts.php')
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				this.setState({ concerts: json });
			});
	}

	getSlides() {
		fetch(api_url + '/getConcerts.php?highlight=1')
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				this.setState({ slides: json });
			});
	}

	render() {
		document.title = 'onlive | the online live concert of your favourite band';
		// console.log(this.state.slides);
		return (
			<div>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Intro} />
						<Route path="/concert/:id" component={Concert} />
						<Route path="/search/" component={Search} />
						<Route path="/arena/" component={Arena} />
						<Route path="/about/" component={About} />
						<Route
							path="/home"
							render={(props) => <Home {...props} concerts={this.state.concerts} slides={this.state.slides} />}
						/>
						<Route
							path="/checkout/:concert_id/:ticket_price"
							render={(props) => <Checkout {...props} concerts={this.state.concerts} />}
						/>
						{/*
					  * https://tylermcginnis.com/react-router-pass-props-to-components/
						*/}
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
