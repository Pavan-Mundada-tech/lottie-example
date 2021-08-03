import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

export default class TouchPoint extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={this.props.container}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box1: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: 'rgba(219,184,209, 0.7)',
  },
  box2: {
    height: 35,
    width: 35,
    backgroundColor: 'rgba(239,118,147,0.8)',
    position: 'absolute',
    borderRadius: 100,
    top: 7,
    left: 7,
  },
  box3: {
    height: 20,
    width: 20,
    backgroundColor: 'rgba(244,67,108, 1)',
    position: 'absolute',
    borderRadius: 100,
    top: 14,
    left: 14,
  },
});
