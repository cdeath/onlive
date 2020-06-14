import React from 'react';
import Status from 'components/Status';
import styles from 'assets/css/Card.module.css';
import { padStart, classNames } from 'utils';

export default ({ concert, className, ...props }) => {
	if (!concert) return '';

	const date = new Date(concert.date);
	const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()];

	return <div {...props} className={classNames(styles.card, className)}>
		<a href={'/concert/' + concert.id}>
			<span className={styles.cardHeader}>
				{month} {date.getDate()}, {' '} {date.getHours()}: {padStart(date.getMinutes(), 2)}
			</span>
			<figure>
				<img src={'../media/bands/' + concert.img} alt={concert.title} />
			</figure>
			<span className={styles.cardBody}>
				<h3>{concert.title}</h3>
				<p>{concert.description}</p>
				<Status concert={concert} />
			</span>
			{/* <span className={styles.cardFooter}>more</span> */}
		</a>
	</div>;
}