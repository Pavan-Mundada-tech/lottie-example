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
const helicopter = require('./assets/helicopter.json');
const benchmark = require('./assets/benchmark.json');
const sun = require('./assets/sun.json');
const pharma = require('./assets/pharma.json');
const jets = require('./assets/jets.json');

const image = {
  uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2020-02/14/21/enhanced/553ef1e26c9a/enhanced-372-1581714965-4.png',
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentAnimation: 'helicopter'};
  }
  componentDidMount() {
    // this.playAnimation();
    // Or set a specific startFrame and endFrame with:
  }

  playAnimation = () => {
    this.resetAnimation();

    this.animation.play();
  };

  resetAnimation = () => {
    this.animation.reset();
  };

  alertBox = () => {
    Alert.alert(
      'Hey There!',
      'Two button alert dialog',
      [
        {
          text: 'Yes',
          onPress: () => {
            this.playAnimation();
            // this.resetAnimation();
          },
        },
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

  // passAnimation = () => {
  //   switch (this.state.currentAnimation) {
  //     case 'pharma':
  //       pharma;
  //       break;
  //     case 'helicopter':
  //       helicopter;
  //       break;
  //     case 'benchmark':
  //       benchmark;
  //       break;
  //     case 'jets':
  //       jets;
  //       break;
  //     default:
  //       'sun';
  //       sun;
  //   }
  // };

  render() {
    const {currentAnimation} = this.state;

    return (
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.animationContainer}>
          {/* <TouchableOpacity onPress={this.alertBox} activeOpacity={0.9}> */}

          <LottieView
            // source={this.passAnimation()}
            source={
              currentAnimation === 'helicopter'
                ? helicopter
                : currentAnimation === 'benchmark'
                ? benchmark
                : currentAnimation === 'pharma'
                ? pharma
                : currentAnimation === 'jets'
                ? jets
                : sun
            }
            // resizeMode="cover"
            ref={animation => {
              this.animation = animation;
            }}
            loop={true}
            // autoPlay={false}
          />

          {/* <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            resizeMode="contain"
            speed={1} //we can control the speed of an animation.Sending a negative value will reverse the animation
            progress={0} //A number between 0 and 1, or an Animated number between 0 and 1. This number represents the normalized progress of the animation. If you update this prop, the animation will correspondingly update to the frame at that progress value. This prop is not required if you are using the imperative API.
            style={{
              width: 400,
              height: 215,
              backgroundColor: '#eee',
            }}
            // source={require('./assets/cycle.json')}
            source={helicopter}
            loop={true}

            // OR find more Lottie files @ https://lottiefiles.com/featured
            // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
          /> */}
          {/* <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            // resizeMode=""
            speed={1} //we can control the speed of an animation.Sending a negative value will reverse the animation
            progress={0} //A number between 0 and 1, or an Animated number between 0 and 1. This number represents the normalized progress of the animation. If you update this prop, the animation will correspondingly update to the frame at that progress value. This prop is not required if you are using the imperative API.
            style={{
              width: 400,
              height: 215,
              backgroundColor: '#eee',
            }}
            // source={require('./assets/cycle.json')}
            source={pharma}
            loop={true}

            // OR find more Lottie files @ https://lottiefiles.com/featured
            // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
          /> */}
          <View style={styles.buttonContainer}>
            <Button
              style={styles.pharmaStyle}
              title=""
              onPress={() => {
                this.setState({currentAnimation: 'pharma'});

                this.alertBox();

                //
                // // this.resetAnimation();
              }}
            />
          </View>

          <View style={styles.jetsContainer}>
            <Button
              style={styles.pharmaStyle}
              title=""
              onPress={() => {
                this.setState({currentAnimation: 'helicopter'});
                this.alertBox();
                // this.resetAnimation();
              }}
            />
          </View>

          <View style={styles.sunContainer}>
            <Button
              style={styles.playStyle}
              title=""
              onPress={() => {
                this.setState({currentAnimation: 'sun'});
                this.alertBox();
                // this.resetAnimation();
              }}
            />
          </View>

          <View style={styles.benchmarkContainer}>
            <Button
              style={styles.playStyle}
              title=""
              onPress={() => {
                this.setState({currentAnimation: 'benchmark'});
                this.alertBox();
                // this.resetAnimation();
              }}
            />
          </View>

          <View style={styles.clinicContainer}>
            <Button
              style={styles.playStyle}
              title=""
              onPress={() => {
                this.setState({currentAnimation: 'jets'});
                this.alertBox();
                // this.resetAnimation();
              }}
            />
          </View>

          {/* </TouchableOpacity> */}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // position: 'absolute',
    // paddingTop: 30,
    // marginRight: 40,
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
    backgroundColor: 'blue',
    // color: 'tomato',
  },

  jetsContainer: {
    position: 'absolute',

    top: 200,
    left: 100,
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

  benchmarkContainer: {
    position: 'absolute',

    top: 300,
    left: 50,
    // width: 100,
    // height: 50,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'orange',
    // color: 'tomato',
  },

  sunContainer: {
    position: 'absolute',

    top: 150,
    left: 250,
    // width: 100,
    // height: 50,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'black',
    // color: 'tomato',
  },

  clinicContainer: {
    position: 'absolute',

    top: 375,
    left: 200,
    // width: 100,
    // height: 50,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'brown',
  },
  playStyle: {
    // position: 'absolute',
    // paddingTop: 100,
  },
});
