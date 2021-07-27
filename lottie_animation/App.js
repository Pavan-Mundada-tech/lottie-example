/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Button,
  StyleSheet,
  View,
  Alert,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';
import pharma from './assets/pharma.json';

const image = {
  uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2020-02/14/21/enhanced/553ef1e26c9a/enhanced-372-1581714965-4.png',
};

export default class App extends React.Component {
  componentDidMount() {
    // this.animation.play(2, 60);
    // Or set a specific startFrame and endFrame with:
  }

  // playAnimation = () => {
  //   this.animation.play();
  // };

  // resetAnimation = () => {
  //   this.animation.reset();
  // };

  alertBox = () => {
    Alert.alert(
      'Hey There!',
      'Two button alert dialog',
      [
        {text: 'Yes', onPress: () => this.animation.play()},
        {
          text: 'No',
          onPress: () => this.animation.reset(),
          // style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  render() {
    return (
      <LottieView style={styles.animationContainer}>
        {/* <TouchableOpacity onPress={this.alertBox} activeOpacity={0.9}> */}
        {/* <ImageBackground
            source={image}
            resizeMode="center"
            style={styles.image}> */}
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          resizeMode="contain"
          speed={1} //we can control the speed of an animation.Sending a negative value will reverse the animation
          progress={0} //A number between 0 and 1, or an Animated number between 0 and 1. This number represents the normalized progress of the animation. If you update this prop, the animation will correspondingly update to the frame at that progress value. This prop is not required if you are using the imperative API.
          style={{
            width: 400,
            height: 400,
            backgroundColor: '#eee',
          }}
          // source={require('./assets/cycle.json')}
          source={pharma}
          loop={true}

          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
        {/* </ImageBackground> */}
        <View style={styles.buttonContainer}>
          <Button style={styles.playStyle} title="" onPress={this.alertBox} />
          {/* <Button title="Reset" onPress={this.resetAnimation} /> */}
        </View>

        {/* </TouchableOpacity> */}
      </LottieView>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  // image: {
  //   flex: 1,
  //   justifyContent: 'center',
  // },
  buttonContainer: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // position: 'absolute',
    // paddingTop: 30,
    // marginRight: 40,
    margin: 50,
    position: 'absolute',

    top: 400,
    left: 160,
    // width: 100,
    // height: 50,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'red',
    // color: 'tomato',
  },
  playStyle: {
    // position: 'absolute',
    // paddingTop: 100,
  },
});
