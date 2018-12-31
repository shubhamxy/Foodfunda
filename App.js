import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import { Provider } from "react-redux";

import NavigationService from "./utils/NavigationService";
import AppNavigator from "./navigation/AppNavigator";

import { colors } from "./config";
import { constants } from "./constants";
import store from "./redux/store";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      require("./assets/images/logo-dev.png"),
      require("./assets/images/logo-prod.png"),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Icon.Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free
      // to remove this if you are not using it in your app
      "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
    }),
  ]);

  handleLoadingError = (error) => {
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({
      isLoadingComplete: true
    });
  };


  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
        <View style={styles.statusBar} />
        <Provider store={store}>
          <AppNavigator
            ref={
              (navigatorRef) => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }
            }
          />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  // this. for opac statusbar
  statusBar: {
    backgroundColor: colors.statusbar,
    height: constants.statusbarMargin,
  }
});
