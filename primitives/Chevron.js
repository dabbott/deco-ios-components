import React, { Component, } from 'react'
import { View, StyleSheet } from 'react-native'
import Triangle from './Triangle'

class Chevron extends Component {

  static propTypes = {}

  static defaultProps = {
    borderColor: 'black',
    borderWidth: 1,
    width: 10,
    height: 20,
    direction: 'right',
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {width, height, borderColor, direction, borderWidth} = this.props
    
    const style = {
      width,
      height,
      backgroundColor: 'lightgray',
    }

    const diagonal = Math.sqrt(width * width + (height / 2) * (height / 2))
    const rotation = Math.atan2(height / 2, width)
    
    const a = {
      position: 'absolute', 
      top: height / 4, 
      left: -(diagonal - width) / 2,
      width: diagonal,
      height: borderWidth,
      backgroundColor: borderColor,
      transform: [{rotateZ: `${rotation}rad`}],
    }

    const b = {
      position: 'absolute', 
      top: 3 * height / 4 - borderWidth / 2,
      left: -(diagonal - width) / 2,
      width: diagonal,
      height: borderWidth,
      backgroundColor: borderColor,
      transform: [{rotateZ: `-${rotation}rad`}],
    }

    return (
      <View style={style}>
        <View style={a} />
        <View style={b} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  absolute: {
    top: 0, 
    left: 0,
    position: 'absolute',
  }
})

export default Chevron