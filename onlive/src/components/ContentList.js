import React from 'react';
import Card from 'components/Card';
import styles from 'assets/css/ContentList.module.css';

export default ({ concerts }) => <div id="concert-list" className={styles.tabContent}>
	<h2>This Month</h2>
	<div className={styles.cardContainer}>
		{concerts.map(item => +new Date(item.date) < +new Date() + 2592e6 ? <Card {...item} key={item.id} /> : null)}
	</div>
	<h2>Confirmed</h2>
	<div className={styles.cardContainer}>
		{concerts.map(item => item.tickets >= item.tickets_total ? <Card {...item} key={item.id} /> : null)}
	</div>
	<h2>Make It Happen</h2>
	<div className={styles.cardContainer}>
		{concerts.map(item => item.tickets <= item.tickets_total * 0.25 ? <Card {...item} key={i} /> : null)}
	</div>
</div>;