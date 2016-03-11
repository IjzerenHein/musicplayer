import React, {StyleSheet, Text, TouchableOpacity, ListView, View} from 'react-native';
//import Icon from  'react-native-vector-icons/Ionicons';

const items = {
	genres: [
		{id: 'all', text: 'Alles'},
		{id: 'flash', text: 'Flash'},
		{id: 'nederlands', text: 'Nederlands'},
		{id: 'carnaval', text: 'Carnaval'},
		{id: 'top2000', text: 'Top 2000'},
		{id: 'alternativerock', text: 'Alt. Rock'}
	],
	periods: [
		{id: '60s', text: 'Jaren 60'},
		{id: '70s', text: 'Jaren 70'},
		{id: '80s', text: 'Jaren 80'},
		{id: '90s', text: 'Jaren 90'},
		{id: '2000s', text: 'Jaren 2000'},
		{id: '2010s', text: 'Jaren 2010'}
	]
};

function getSectionText(section) {
	if (section === items.genres) {
		return 'Genres';
	}
	else if (section === items.periods) {
		return 'Periodes'
	}
}

const styles = StyleSheet.create({
	categoryItem: {
		flexDirection: 'row',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10
	},
	categoryText: {
		opacity: 0.8
	},
	item: {
		flexDirection: 'row',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 20
	},
	itemText: {
		flex: 1
	},
	itemIcon: {
		marginRight: 10,
		marginLeft: 10
	},
	separator: {
		height: 1,
		backgroundColor: 'gray'
	}
});

const SectionHeader = (props) => (
	<View style={styles.categoryItem}>
		<Text style={styles.categoryText}>{getSectionText(props.data)}</Text>
	</View>
);

const Row = (props) => (
	<TouchableOpacity onPress={() => alert('whoop')}>
		<View style={styles.item}>
			<Text style={styles.itemText}>{props.data.text}</Text>
			{/*<Icon style={styles.itemIcon} name='chevron-right' />*/}
		</View>
	</TouchableOpacity>
);

export default class Playlists extends React.Component {
	constructor() {
		super();
		const ds = new ListView.DataSource({
			sectionHeaderHasChanged: (r1, r2) => r1 !== r2,
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
			//dataSource: ds.cloneWithRows(items)
			dataSource: ds.cloneWithRowsAndSections(items)
		};
	}

	render() {
		return <ListView {...this.props}
			dataSource={this.state.dataSource}
			renderSectionHeader={(section) => <SectionHeader data={section} />}
			renderRow={(row) => <Row data={row} />}
			//renderSeparator={(sectionId, rowId) => <View key={'sep_' + sectionId + '_' + rowId} style={styles.separator} />}
		/>
	}
}
