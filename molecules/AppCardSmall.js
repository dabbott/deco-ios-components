import React, { Component, } from 'react'
import { View, } from 'react-native'
import { Rectangle, Text } from '../primitives'
import { Vertical, Spacer } from '../layout'

class AppCardSmall extends Component {

  static propTypes = {}

  static defaultProps = {}

  render() {
    const {image, title, subtitle, price} = this.props
    
    return (
      <Vertical align={'left'} width={95} height={'shrink'}>
        <Rectangle
          backgroundColor={'white'}
          borderColor={'rgba(0,0,0,0.1)'}
          borderWidth={1}
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
        {price && <Spacer size={2} />}
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