import React from 'react';
import styles from 'assets/css/Background.module.css';

export default Background = ({ concert, ...props }) => <div {...props} id={styles.bg}>
	<img src={`../../media/bands/${concert.img}`} alt={concert.title} />
</div>;

Background.defaultProps = {
	concert: {},
};