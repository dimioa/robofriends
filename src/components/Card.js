import React from 'react';

const Card = ({name, email, id}) => {
	return (
		//bg-light-etc-etc are styling shortcuts provided by tachyons package
	 	<div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?150x150`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;