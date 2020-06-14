import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'assets/css/Button.module.css';
import { classNames } from 'utils';

export default ({ size, type, href, onClick, className, children, ...props }) => {
	const Component = href ? Link : 'button';
	return <Component
		{...props}
		to={href || null}
		type={href ? null : type || 'button'}
		className={classNames({ 1: styles.btnSm, 2: styles.btn, 3: styles.btnLg }[size || 2], className)}
	>
		{children}
	</Component>;
};