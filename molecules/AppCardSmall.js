import React, { Component, } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { OutlinedImage } from '../atoms'
import { Text } from '../primitives'
import { Vertical, Spacer } from '../layout'

class AppCardSmall extends Component {

  static propTypes = {}

  static defaultProps = {}

  render() {
    const {image, title, subtitle, price} = this.props
    
    return (
      <Vertical
        align={'left'}
        width={95}
        height={'shrink'}
      >
        <OutlinedImage
          width={95} 
          height={95} 
          borderRadius={20}
          backgroundImage={image}
        />
        <Spacer size={6} />
        <Text 
          width={'auto'}
          text={title}
          fontSize={12}
          color={'black'}
        />
        <Spacer size={2} />
        <Text 
          width={'auto'}
          text={subtitle}
          fontSize={12}
          color={'#666666'}
        />
        {price && (
          <Spacer size={2} />
        )}
        {price && (
          <Text 
            width={'auto'}
            text={price}
            fontSize={12}
            color={'#666666'}
          />
        )}
      </Vertical>
    )
  }
}

export default AppCardSmall