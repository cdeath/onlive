import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default () => <div id="home">
	<Header />
	<main className="top">
		<section id="about">
			<div>
				<h2>About E Cenas</h2>
				<p>
					You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the
					world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't
					know exactly when we turned on each other, but I know that seven of us survived the slide... and only
					five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that
					killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.
				</p>
				<p>
					Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that
					show to the people who make shows, and on the strength of that one show they decide if they're going to
					make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She
					starred in one of the ones that became nothing.
				</p>
				<p>
					Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name
					printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a
					mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy
					store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
				</p>
			</div>
		</section>
	</main>
	<Footer />
</div>;
