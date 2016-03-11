import React, {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const styles = StyleSheet.create({
	main: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 30,
		paddingTop: 20
	},
	backward: {
		resizeMode: 'contain',
		height: 40
	},
	play: {
		resizeMode: 'contain',
		height: 60
	},
	forward: {
		resizeMode: 'contain',
		height: 40
	}
});

export default class PlayControls extends React.Component {
	constructor() {
		super();
	}

	render() {
		return <View style={styles.main}>
			<TouchableOpacity>
				<Image style={styles.backward} source={require('../assets/png/backward.png')} />
			</TouchableOpacity>
			<TouchableOpacity>
				<Image style={styles.play} source={require('../assets/png/play.png')} />
			</TouchableOpacity>
			<TouchableOpacity>
				<Image style={styles.forward} source={require('../assets/png/forward.png')} />
			</TouchableOpacity>
		</View>
	}
}
