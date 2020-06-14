import React from 'react';
import Status from 'components/Status';
import ConcertDate from 'components/ConcertDate';
import styles from 'assets/css/Slide.module.css';

export default ({ concert }) => <div className={styles.slideContainer}>
	<div className={styles.slideHeader}>
		<ConcertDate date={concert.date} />
	</div>
	<figure>
		<img src={'../../media/bands/' + concert.img} alt={concert.title} />
	</figure>
	<div className={styles.slideBody}>
		<h1>{concert.title}</h1>
		<p>{concert.description}</p>
		<Status concert={concert} />
	</div>
</div>;