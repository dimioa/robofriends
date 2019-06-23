import React from 'react';

//The onchange event occurs when the value of the element has been changed.
//When that happens, the searchChange function will be run, which is defined in App.js as the onSearchChange function.
//So in short, when the searchBox value changes, onSearchChange of App will be run.
//This way the searchBox can communicate through the parent (App) with the CardList.
const SearchBox = ({searchChange}) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='Search Robots...' 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;
