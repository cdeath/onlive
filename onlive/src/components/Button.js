import React from 'react';
import styles from 'assets/css/Button.module.css';
import { classNames } from 'utils';

export default ({ size, type, href, label, onClick, className, ...props }) => {
	const cn = classNames({
		1: styles.btnSm,
		2: styles.btn,
		3: styles.btnLg,
	}[size || 2], className);

	return href ?
		<a {...props} href={onClick ? '#' : href} onClick={onClick ? e => { e.preventDefault(); onClick(); } : null} className={cn}>
			{label}
		</a> :
		<button {...props} type={type || 'button'} onClick={onClick} className={cn}>
			{label}
		</button>;
};