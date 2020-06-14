import React from 'react';
import styles from 'assets/css/Background.module.css';

export default Background = ({ src, alt, ...props }) => <div {...props} id={styles.bg}>
	<img src={`../../media/bands/${src}`} alt={alt} />
</div>;