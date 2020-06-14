import React, { useState } from 'react';
import { api_url } from 'config';
import Button from 'components/Button';
import styles from 'assets/css/Cart.module.css';

export default props => {

	if (!props.concert) return '';

	const [state, setState] = useState({
		concert_id: props.concert.id,
		defaultPrice: props.defaultPrice,
		price: props.defaultPrice,
		quantity: 1,
		name: '',
		email: '',
		classNames: {
			form: '',
			result: 'hide',
		},
	});

	function updatePrice({ target: { value }}) {
		setState({ ...state, quantity: value, price: state.defaultPrice * value });
	}

	async function sendForm(e) {
		e.preventDefault();
		const res = await fetch(`${api_url}insertTicket.php/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(state),
		});
		if (!res.ok) {
			throw Error('Data sent - Network response NOT OK');
		} else {
			console.log('Data sent - Network response OK');
		}
		setState({ ...state, classNames: { form: 'hide', result: '' }});
	};

	return <div id={styles.cart} className={styles.tabContent}>
		<div className={styles.card}>
			<form onSubmit={sendForm} className={state.classNames.form}>
				<label htmlFor="quantity">Tickets Wanted</label>
				<input type="number" name="quantity" id="quantity" min="1" value={state.quantity} onChange={updatePrice} />
				<label htmlFor="price">price in euros</label>
				<input type="text" name="price" id="price" value={state.defaultPrice} disabled />
				<label htmlFor="name">name</label>
				<input type="text" name="name" id="name" value={state.name} required />
				<label htmlFor="email">email</label>
				<input type="email" name="email" id="email" value={state.email} required />
				<span className={styles.note}>
					Remember that you will only pay for this ticket if the concert happens. We will send you the entry code to
					30 minutes before the concert starts. This code is valid for one entrance only.
				</span>
				<Button type="button" label="next" size={2} />
			</form>
			<div className={`${styles.result} ${state.classNames.result}`}>
				<h2>The band says thanks</h2>
				<h3>{props.concert.band_msg}</h3>
				<p>- {props.concert.band_sign}</p>
			</div>
		</div>
	</div>;
};