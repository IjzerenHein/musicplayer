import React, {View, StyleSheet, Text} from 'react-native';
import VolumeSlider from './VolumeSlider';
import PlayControls from './PlayControls';
import Slider from 'react-native-slider';
import SearchBar from './SearchBar';

const styles = StyleSheet.create({
	main: {
		flex: 1,
		flexDirection: 'row',
		padding: 10
	},
	leftPane: {
		flex: 1,
		flexDirection: 'column'
	},
	rightPane: {
		flex: 1,
		paddingLeft: 20
	},
	topPane: {
		flex: 4
	},
	bottomPane: {
		flex: 1,
		justifyContent: 'center'
	},
	bottomPane2: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	title: {
		fontSize: 32
	},
	subTitle: {
		opacity: 0.9,
		fontSize: 22,
		textAlign: 'center'
	},
	playProgress: {
		flex: 3
	},
	searchBar: {
		marginLeft: 10,
		flex: 1
	}
});

const PlayTitle = () => (
	<View>
		<Text style={styles.title}>The Unforgiven</Text>
		<Text style={styles.subTitle}>Metallic, Black Album</Text>
	</View>
);

const PlayProgress = (props) => (
	<View {...props}>
		<Slider thumbStyle={{width: 2}} />
	</View>
);

export default class Playbar extends React.Component {
	constructor() {
		super();
	}

	render() {
		return <View style={styles.main}>
			<View style={styles.leftPane}>
				<View style={styles.topPane}><PlayControls /></View>
				<View style={styles.bottomPane}><VolumeSlider /></View>
			</View>
			<View style={styles.rightPane}>
				<View style={styles.topPane}><PlayTitle /></View>
				<View style={styles.bottomPane2}>
					<PlayProgress style={styles.playProgress}/>
					<SearchBar style={styles.searchBar}/>
				</View>
			</View>
		</View>
	}
}
