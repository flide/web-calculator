import React, {Component} from 'react';
import DisplayScreen from './DisplayScreen';
import NumberPad from './NumberPad';

class Calculator extends Component {

	render() {
		return (
			<div>
				<h1> Calculator </h1>
				<DisplayScreen/>
				<NumberPad/>
			</div>
		);
	}
}

export default Calculator;
