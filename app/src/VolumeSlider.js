import React, {View, StyleSheet} from 'react-native';
//import Icon from  'react-native-vector-icons/Ionicons';
import Slider from 'react-native-slider';

const styles = StyleSheet.create({
	main: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	iconLow: {
		marginRight: 10
	},
	iconHigh: {
		marginLeft: 10
	},
	slider: {
		flex: 1
	}
});

export default class VolumeSlider extends React.Component {
	constructor() {
		super();
	}

	render() {
		return <View style={styles.main}>
			{/*<Icon style={styles.iconLow} name='volume-low' size={30}/>*/}
			<Slider style={styles.slider} />
			{/*<Icon style={styles.iconHigh} name='volume-high' size={30}/>*/}
		</View>
	}
}
