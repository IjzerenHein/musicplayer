import React, {TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	main: {
		borderRadius: 10,
		borderColor: 'black',
		borderWidth: 1,
		textAlign: 'center'
	}
});

export default class SearchBar extends React.Component {
	constructor() {
		super();
	}

	render() {
		return <TextInput style={[this.props.style, styles.main]} placeholder='Zoeken...' />
	}
}
