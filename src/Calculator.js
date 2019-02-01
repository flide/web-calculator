import React, {Component} from 'react';
import CustomProperties from 'react-custom-properties';
import DisplayScreen from './DisplayScreen';
import NumberPad from './NumberPad';

class Calculator extends Component {

	render() {
		return (
			<CustomProperties properties={{ '--borderColour': '#FF0000'}}>
				<h1> Calculator </h1>
				<DisplayScreen/>
				<NumberPad/>
			</CustomProperties>
		);
	}
}

export default Calculator;
