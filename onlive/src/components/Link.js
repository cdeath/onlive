import React from 'react';
import styles from 'assets/css/Link.module.css';

class Link extends React.Component {
	render() {
		return (
			<a href={this.props.href} className={styles.link}>
				{this.props.label}
			</a>
		);
	}
}

export default Link;
