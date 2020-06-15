import React, { useState, useEffect } from 'react';
import Footer from 'components/Footer';
import Background from 'components/Background';
import Button from 'components/Button';
import Link from 'components/Link';
import Svg from 'components/Svg';
import { api_url } from 'config';
import { classNames } from 'utils';

export default () => {

	const [state, setState] = useState({
		concert: {},
		comments: [],
		access: true,
		stage: false,
		comment: '',
		code: '',
	});

	function onChange({ target: { name, value }}) {
		setState({ ...state, [name]:  value });
	}

	async function getComments() {
		// console.log(`${api_url}getComments.php?id=${concert.id}`);
		const res = await fetch(`${api_url}getComments.php?id=${state.concert.id}`);
		setState({ ...state, comments: res.json() });
	}

	async function sendComment(e) {
		e.preventDefault();
		if (!state.comment) return;
		await fetch(`${api_url}insertComment.php`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				concert_id: concert.id,
				comment: document.querySelector('#my-comment').value,
				photo: 'wolf.jpg',
				name: 'Wolf'
			}),
		});
		getComments();
		setState({ ...state, comment: '' });
	}

	async function checkCookie() {
		const link = document.cookie.split('a=').pop();
		if (!link) return;
		const res = await fetch(`${api_url}getConcertByCookie.php?cookie=${link}`);
		setState({ ...state, concert: res.json(), access: false, stage: true });
		getComments();
	}

	async function checkTicket(e) {
		e.preventDefault();
		const res = await fetch(`${api_url}getTicket.php?code=${state.code}`);
		if (res.json) {
			setState({ ...state, concert: res.json, access: false, stage: true });
			document.cookie = `a=${state.concert.link}; expires=${(+new Date() + 36e5).toUTCString()}; path=/`;
		} else {
			alert('Sorry! Invalid code.');
		}
	}

	async function updateCode() {
		await fetch(`${api_url}updateCode.php`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: state.concert.ticket_id }),
		}).catch((error) => console.error('OOPS: ' + error));
	}

	useEffect(() => {
		checkCookie();
	}, []);

	useEffect(() => {
		updateCode();
		getCommments();
	}, [state.concert.id]);

	return <div>
		<main>
			<Background />
			<section id="arena">
				<div id="access" className={classNames({ hide: state.access })}>
					<Svg href="#logo-svg" />
					<h1>Arena</h1>
					<p>Enter your ticket code to access the live concert</p>
					<form onSubmit={checkTicket}>
						<input type="text" name="code" id="code" placeholder="ticket code" value={state.code} onChange={onChange} />
						<Button size={2}>Enter</Button>
					</form>
					<br />
					<Link href={'/.'} label={'website'} />
				</div>
				<div id="stage" className={classNames({ hide: state.stage })}>
					<div id="player">
						<Svg href="#logo-svg" />
						<Link href={'/home/'} label={'visit website'} />
						<iframe
							src={`https://www.youtube.com/embed/${state.concert.link}`}
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="concert"
						/>
						<div>
							<h1>{state.concert.title}</h1>
							<p>{state.concert.description}</p>
						</div>
					</div>
					<div id="chat">
						<div className="comment-list">
							<div>
								{comments.map(item => <div className="comment" key={item.id}>
									<div className="profile">
										<img src={'media/users/' + item.photo} alt={item.name} />
									</div>
									<div>
										<p>{item.comment}</p>
										<span className="info">
											{item.name} - {item.date}
										</span>
									</div>
								</div>)}
							</div>
						</div>
						<form onSubmit={sendComment}>
							<input type="text" name="my-comment" id="my-comment" value={state.comment} onChange={onChange} />
							<Button size={1}>Add comment</Button>
						</form>
					</div>
				</div>
			</section>
		</main>
		<Footer />
	</div>;
};