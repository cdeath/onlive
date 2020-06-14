import React from 'react';
import Button from 'components/Button';
import styles from 'assets/css/ConcertDetail.module.css';

export default ({ prices, concert }) => prices ? 
<div id={styles.concertDetail} className={styles.tabContent}>
	<div className={styles.ticket}>
		<h2>Buy Your Ticket</h2>
		<div className={styles.optionList}>
			{prices.map((item, i) => <div className={styles.option} key={i}>
				<span>
					<h3>{item.price_val}EUR</h3>
					<p>{item.price_desc}</p>
				</span>
				<Button href={`/checkout/${item.concert_id}/${item.price_val}`} size={1}>buy</Button>
				{/* @ https://stackoverflow.com/questions/37696391/multiple-params-with-react-router */}
			</div>)}
		</div>
	</div>
	<div className={styles.about}>
		<h2>About</h2>
		<p>{concert.text}</p>
	</div>
</div> : null;