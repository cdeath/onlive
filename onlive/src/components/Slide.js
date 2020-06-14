import React from 'react';
import Status from './Status';
import styles from 'assets/css/Slide.module.css';

class Highlight extends React.Component {
	render() {
		// console.log(this.props.concert);

		const monthNames = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		];

		if (!this.props.concert) {
			return '';
		}

		return (
			<div className={styles.slideContainer}>
				<div className={styles.slideHeader}>
					{monthNames[new Date(this.props.concert.date).getMonth()]} {new Date(this.props.concert.date).getDate()}, {' '}
					{new Date(this.props.concert.date).getHours()}:
					{(
						new Date(this.props.concert.date).getMinutes() < 10 ? '0' :
						'') + new Date(this.props.concert.date).getMinutes()}
				</div>
				<figure>
					<img src={'../../media/bands/' + this.props.concert.img} alt={this.props.concert.title} />
				</figure>
				<div className={styles.slideBody}>
					<h1>{this.props.concert.title}</h1>
					<p>{this.props.concert.description}</p>
					<Status concert={this.props.concert} />
				</div>
			</div>
		);
	}
}

export default Highlight;
