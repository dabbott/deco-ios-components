import React, { Component, } from 'react'
import { View, StyleSheet } from 'react-native'
import { colors } from '../config.json'

class Chevron extends Component {

  static propTypes = {}

  static defaultProps = {
    borderColor: colors.actionBlue,
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
    const {width, height, borderColor, borderWidth, direction} = this.props
    const flip = (direction === 'down' || direction === 'left') ? -1 : 1
    
    const style = {
      width,
      height,
//       backgroundColor: 'red',
    }
    
    let hypotenuse, rotation, a, b

    if (direction === 'left' || direction === 'right') {
      hypotenuse = Math.sqrt(width * width + (height / 2) * (height / 2))
      rotation = Math.atan2(height / 2, width)

      a = {
        position: 'absolute', 
        top: height / 4, 
        left: -(hypotenuse - width) / 2,
        width: hypotenuse,
        height: borderWidth,
        backgroundColor: borderColor,
        transform: [{rotateZ: `${rotation * flip}rad`}],
      }

      b = {
        position: 'absolute', 
        top: 3 * height / 4 - borderWidth / 2,
        left: -(hypotenuse - width) / 2,
        width: hypotenuse,
        height: borderWidth,
        backgroundColor: borderColor,
        transform: [{rotateZ: `${-rotation * flip}rad`}],
      } 
    } else if (direction === 'up' || direction === 'down') {
      hypotenuse = Math.sqrt(height * height + (width / 2) * (width / 2))
      rotation = Math.atan2(width / 2, height)

      a = {
        position: 'absolute', 
        left: width / 4, 
        top: -(hypotenuse - height) / 2,
        height: hypotenuse,
        width: borderWidth,
        backgroundColor: borderColor,
        transform: [{rotateZ: `${rotation * flip}rad`}],
      }

      b = {
        position: 'absolute', 
        left: 3 * width / 4 - borderWidth / 2,
        top: -(hypotenuse - height) / 2,
        height: hypotenuse,
        width: borderWidth,
        backgroundColor: borderColor,
        transform: [{rotateZ: `${-rotation * flip}rad`}],
      } 
    }

    return (
      <View style={style}>
        <View style={a} />
        <View style={b} />
      </View>
    )
  }
}

export default Chevron