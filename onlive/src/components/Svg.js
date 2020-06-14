import React from 'react';
import sprite from 'assets/img/sprite.svg';
// @ https://medium.com/@gineetmehta/how-to-use-svg-sprites-regular-html-vs-react-9f98948c03f0

export default ({ href }) => <svg>
	<use href={`${sprite}${href}`} />
</svg>;