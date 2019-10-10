import React from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import { AsyncStorage,UIManager } from 'react-native';
import { persistStore } from 'redux-persist';
import Router from './app/router';
import store from './app/store';

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends React.Component {
    state = {
      isReady: false
    }
  
    componentDidMount() {
      persistStore(
        store,
        {
          storage: AsyncStorage,
        },
        () => {
          this.setState({ isReady: true })
        }
      )
    }

    render() {
      if (!this.state.isReady) {
        return <AppLoading />
      }
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}