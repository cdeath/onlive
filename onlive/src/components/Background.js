import React from 'react';
import styles from 'assets/css/Background.module.css';

export default Background = ({ concert }) => <div id={styles.bg}>
	<img src={'../../media/bands/' + concert.img} alt={concert.title} />
</div>;

Background.defaultProps = {
	concert: {},
};