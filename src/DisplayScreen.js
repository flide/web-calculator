import React, {Component} from 'react';
import CustomProperties from 'react-custom-properties';

class DisplayScreen extends Component {

	render() {
		return (
            <CustomProperties properties={{ '--borderColour': '#00FF00' }}>
                <h2> Display Screen </h2>
            </CustomProperties>
		);
	}
}

export default DisplayScreen;
