import React, {Component} from 'react';
import Button from './Button';
import CustomProperties from 'react-custom-properties';

class NumberPad extends Component {

	render() {
		return (
            <CustomProperties properties={{ '--borderColour': '#0000FF' }}>
				<h2>Number Pad</h2>
				<Button/>
			</CustomProperties>
		);
	}
}

export default NumberPad;
