import React from 'react';
import Card from '../components/Card';
import styles from 'assets/css/ContentList.module.css';

class ContentList extends React.Component {
	render() {
		// console.log(this.props.concerts);
		return (
			<div id="concert-list" className={styles.tabContent}>
				<h2>This Month</h2>
				<div className={styles.cardContainer}>
					{this.props.concerts.map((item, i) => {
						var date = new Date();
						date.setDate(date.getDate() + 30);
						// console.log('DATE -> ' + date);
						// console.log('ITEM -> ' + new Date(item.date));
						if (new Date(item.date) < date) {
							// console.log(item.title);
							return <Card concert={item} key={i} />;
						} else {
							return '';
						}
					})}
				</div>

				<h2>Confirmed</h2>
				<div className={styles.cardContainer}>
					{this.props.concerts.map((item, i) => {
						if (parseInt(item.tickets) >= parseInt(item.tickets_total)) {
							return <Card concert={item} key={i} />;
						} else {
							return '';
						}
					})}
				</div>

				<h2>Make It Happen</h2>
				<div className={styles.cardContainer}>
					{this.props.concerts.map((item, i) => {
						if (parseInt(item.tickets) <= parseInt(item.tickets_total) * 0.25) {
							return <Card concert={item} key={i} />;
						} else {
							return '';
						}
					})}
				</div>
			</div>
		);
	}
}

export default ContentList;
