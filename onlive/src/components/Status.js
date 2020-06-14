import React from 'react';
import stylesProgress from 'assets/css/Status.module.css';

export default ({ concert }) => {
	const status = concert.tickets_total - concert.tickets >= 0 ? concert.tickets_total - concert.tickets : 0;
	const progress = parseInt(concert.tickets * 100 / concert.tickets_total);
	return <div>
		<div className={stylesProgress.progress}>
			<div className={stylesProgress.bar} style={{ width: `${progress}%` }} />
		</div>
		<span className={stylesProgress.status}>{status === 0 ? 'CONFIRMED' : `${status} tickets needed to be confirmed`}</span>
	</div>;
};