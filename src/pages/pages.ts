// The page the user lands on after opening the app and without a session
export const FirstRunPage = 'LoadingPage';

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = 'MenuPage';

// The initial root pages for our tabs (remove if not using tabs)
//export const Tab1Root = 'ListMasterPage';
//export const Tab2Root = 'SearchPage';
//export const Tab3Root = 'SettingsPage';

export * from './devices/devices';
export * from './home/home';
export * from './device-history/device-history';
export * from './devices/devices';
export * from './about/about';
export * from './login/login';
export * from './loading/loading';
export * from './notification-modal/notification-modal'