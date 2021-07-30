/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Button,
  StyleSheet,
  View,
  Modal,
  Alert,
  Pressable,
  Text,
} from 'react-native';
import LottieView from 'lottie-react-native';

const helicopter = require('./assets/helicopter-animation.json');
const benchmark = require('./assets/plane-animation.json');
const sun = require('./assets/sun-animation.json');
const pharma = require('./assets/pharma-animation.json');
const jets = require('./assets/bsw-animation.json');
const clinic = require('./assets/clinic-animation.json');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentAnimation: 'helicopter', modalVisible: false};
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
    // console.log('xyz')
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
  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  render() {
    const {modalVisible} = this.state;

    const {currentAnimation} = this.state;

    return (
      <View style={styles.animationContainer}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello there!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                  this.playAnimation();
                }}>
                <Text style={styles.textStyle}>play</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
              : currentAnimation === 'clinic'
              ? clinic
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
              this.setModalVisible(true);
              // this.alertBox();

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
              this.setModalVisible(true);

              // this.alertBox();
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
              this.setModalVisible(true);

              // this.alertBox();
              // this.resetAnimation();
            }}
          />
        </View>

        <View style={styles.benchmarkContainer}>
          <Button
            style={styles.playStyle}
            title=""
            onPress={() => {
              this.setState({currentAnimation: 'clinic'});
              this.setModalVisible(true);

              // this.alertBox();
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
              this.setModalVisible(true);

              // this.alertBox();
              // this.resetAnimation();
            }}
          />
        </View>

        {/* </TouchableOpacity> */}
      </View>
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

    top: 640,
    left: 235,
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

    top: 210,
    left: 265,
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
  infoModal: {
    marginLeft: 50,
    marginRight: 50,
  },
  infoModalButton: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  benchmarkContainer: {
    position: 'absolute',

    top: 500,
    left: 130,
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

    top: 50,
    left: 230,
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

    top: 180,
    left: 80,
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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
