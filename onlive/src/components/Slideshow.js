import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import Status from 'components/Status';
import Button from 'components/Button';
import ConcertDate from 'components/ConcertDate';
import styles from 'assets/css/Slide.module.css';

export default ({ slides }) => <Slider speed={500} autoplaySpeed={5000} slidesToShow={1} slidesToScroll={1} arrows={false} dots infinite autoplay>
	{slides.map((item, i) => <div className={styles.slideContainer} key={i}>
		<div className={styles.slideHeader}>
			<ConcertDate date={item.date} />
		</div>
		<figure>
			<img src={'../media/bands/' + item.img} alt={item.title} />
		</figure>
		<div className={styles.slideBody}>
			<h1>{item.title}</h1>
			<p>{item.description}</p>
			<Status concert={item} />
		</div>
		<div className={styles.slideFooter}>
			<Button href={`/concert/${item.id}`} size={1}>{`Buy tickets from ${item.price} euros`}</Button>
		</div>
	</div>)}
</Slider>;
