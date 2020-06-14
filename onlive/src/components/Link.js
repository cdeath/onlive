import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'assets/css/Link.module.css';
import { classNames } from 'utils';

export default ({ href, children, className, ...props }) => <Link {...props} to={href} className={classNames(styles.link, className)}>
	{children}
</Link>;