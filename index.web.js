import {AppRegistry} from 'react-native';
import MainView from './app/src/MainView';
import 'file?name=index.html!./index.html';

AppRegistry.registerComponent('MyApp', () => MainView)
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('app') })
