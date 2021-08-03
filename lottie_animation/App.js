import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Alert,
  Pressable,
  Text,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';
import TouchPoint from './TouchPoint';
const helicopter = require('./assets/helicopter-animation.json');
const sun = require('./assets/sun-animation.json');
const pharma = require('./assets/pharma-animation.json');
const jets = require('./assets/bsw-animation.json');
const clinic = require('./assets/clinic-animation.json');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAnimation: 'helicopter',
      modalVisible: false,
      hideButtons: true,
    };
  }

  playAnimation = () => {
    this.animation.play();
  };

  buttons = (buttonContainer, resetAnimation) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          this.setState({currentAnimation: resetAnimation});
          this.setModalVisible(true);
        }}>
        <TouchPoint container={buttonContainer} />
      </TouchableOpacity>
    );
  };
  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  render() {
    const {modalVisible, currentAnimation, hideButtons} = this.state;

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
                  this.setState({hideButtons: false});
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

        <LottieView
          source={
            currentAnimation === 'helicopter'
              ? helicopter
              : currentAnimation === 'pharma'
              ? pharma
              : currentAnimation === 'jets'
              ? jets
              : currentAnimation === 'clinic'
              ? clinic
              : sun
          }
          ref={animation => {
            this.animation = animation;
          }}
          loop={false}
          duration={5000}
          onAnimationFinish={() => {
            this.setState({hideButtons: true});
          }}
        />

        {!modalVisible && hideButtons && (
          <>
            {this.buttons(styles.pharmaContainer, 'pharma')}
            {this.buttons(styles.helicopterContainer, 'helicopter')}
            {this.buttons(styles.sunContainer, 'sun')}
            {this.buttons(styles.clinicContainer, 'clinic')}
            {this.buttons(styles.jetsContainer, 'jets')}
          </>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    flex: 1,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
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
  clinicContainer: {
    position: 'absolute',
    top: 470,
    left: 110,
  },

  sunContainer: {
    position: 'absolute',
    top: 40,
    left: 220,
  },

  jetsContainer: {
    position: 'absolute',
    top: 160,
    left: 60,
  },
  pharmaContainer: {
    position: 'absolute',
    top: 640,
    left: 230,
  },

  helicopterContainer: {
    position: 'absolute',
    top: 200,
    left: 240,
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
