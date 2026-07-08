import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent appelle AppRegistry.registerComponent('main', () => App);
// Cela garantit également que, que vous chargiez l'application dans Expo Go ou dans un build natif,
// l'environnement est configuré de manière appropriée.
registerRootComponent(App);
