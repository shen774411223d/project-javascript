import React, { FC, useState } from "react";



const styles = {
	width: '20vw',
	height: '20vw',
	background: 'grey'
}
const Course: FC = (props) => {
	const [state, setState] = useState<boolean>(false)
  return (
		<div>
			title: course
			<button onClick={() => setState(!state)}>change state</button>
			<div r-if={state} style={styles} />
		</div>
	)
};

export default Course;
