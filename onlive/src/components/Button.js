import React from 'react';
import styles from 'assets/css/Button.module.css';

export default props => {
	const className = {
		1: styles.btnSm,
		2: styles.btn,
		3: styles.btnLg,
	}[props.size || 2];

	return props.type === 'link' ?
		<a href={props.href || '#'} onClick={props.onClick ? e => { e.preventDefault(); props.onClick(); } : null} className={className}>
			{props.label}
		</a> :
		<button onClick={props.onClick} className={className}>
			{props.label}
		</button>;
};