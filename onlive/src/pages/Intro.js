import React from 'react';
import Button from '../components/Button';
import Link from '../components/Link';
import Svg from '../components/Svg';
import styles from 'assets/css/Intro.module.css';

class Intro extends React.Component {
	render() {
		return (
			<main className="top">
				<section id={styles.intro}>
					<div className={styles.container}>
						<Svg href={'#logo-svg'} />
						<p>Not as good as the real deal, but it’ll bring you back the tunes of your life</p>
						<br />
						<br />
						<Button type={'link'} size={2} href={'/home'} label={'find concerts'} />
						<br />
						<br />
						<Link href={'/arena'} label={'Enter Arena'} />
					</div>
				</section>
			</main>
		);
	}
}

export default Intro;
