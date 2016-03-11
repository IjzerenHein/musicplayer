import React, {View, StyleSheet} from 'react-native';
import Playlists from './Playlists';
import Playbar from './Playbar';

const styles = StyleSheet.create({
	main: {
		flex: 1,
		flexDirection: 'column'
	},
	statusBar: {
		height: 20,
		backgroundColor: 'black'
	},
	contentPane: {
		flex: 1,
		flexDirection: 'row'
	},
	leftPane: {
		flex: 1
	},
	rightPane: {
		flex: 5,
		flexDirection: 'column'
	},
	playBar: {
		flex: 1
	},
	tracks: {
		flex: 5,
		backgroundColor: 'yellow'
	}
});

const Tracks = (props) => <View {...props} />

export default class MainView extends React.Component {
	constructor() {
		super();
	}

	render() {
		return <View style={styles.main}>
			<View style={styles.statusBar} />
			<View style={styles.contentPane} >
				<View style={styles.leftPane}><Playlists /></View>
				<View style={styles.rightPane}>
					<View style={styles.playBar}><Playbar /></View>
					<Tracks style={styles.tracks} />
				</View>
			</View>
		</View>
	}
}
