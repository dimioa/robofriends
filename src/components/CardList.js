import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	//Instead of copying manually all the robots, we use a map loop
	const cardsArray = robots.map((user,i) => {
		return (
			<Card 
				key={i} 
				id={robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email}
			/>
		);
	})
	return (
		<div>
			{cardsArray}
		</div>
	);
}

export default CardList;