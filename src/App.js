import React from 'react';
import Board from './Components/Board';

function App() {
	return (
		<div style={{ width: '100%', height: '100%' }}>
			<Board knightPosition={[0, 0]} />
		</div>
	);
}

export default App;
