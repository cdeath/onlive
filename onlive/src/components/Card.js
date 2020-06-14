import React from 'react';
import ConcertDate from 'components/ConcertDate';
import Status from 'components/Status';
import styles from 'assets/css/Card.module.css';

export default props => <div className={styles.card}>
	<a href={'/concert/' + props.id}>
		<span className={styles.cardHeader}>
			<ConcertDate date={props.date} />
		</span>
		<figure>
			<img src={'../media/bands/' + props.img} alt={props.title} />
		</figure>
		<span className={styles.cardBody}>
			<h3>{props.title}</h3>
			<p>{props.description}</p>
			<Status {...props} />
		</span>
		{/* <span className={styles.cardFooter}>more</span> */}
	</a>
</div>;