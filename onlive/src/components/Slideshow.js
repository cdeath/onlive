import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Status from './Status';
import Button from '../components/Button';
import styles from 'assets/css/Slide.module.css';

class Slideshow extends React.Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 5000
		};

		const monthNames = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		];

		return (
			<Slider {...settings}>
				{this.props.slides.map((item, i) => {
					return (
						<div className={styles.slideContainer} key={i}>
							<div className={styles.slideHeader}>
								{monthNames[new Date(item.date).getMonth()]} {new Date(item.date).getDate()},{' '}
								{new Date(item.date).getHours()}:
								{(
									new Date(item.date).getMinutes() < 10 ? '0' :
									'') + new Date(item.date).getMinutes()}
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
								<Button
									type={'link'}
									size={1}
									href={'/concert/' + item.id}
									label={'Buy tickets from ' + item.price + 'eurs'}
								/>
							</div>
						</div>
					);
				})}
			</Slider>
		);
	}
}

export default Slideshow;
