import React, { Component, } from 'react'
import { View, TouchableOpacity } from 'react-native'
import {
  Rectangle,
  Text,
} from '../primitives'
import {
  SmallButton,
} from '../atoms'
import {
  Vertical,
  Horizontal,
  Spacer,
} from '../layout'
import { data } from '../config'

const lightTextColor = '#7F7F7F'

class AppSummaryRow extends Component {

  static propTypes = {}

  static defaultProps = {
  }

  render() {
    const {rank, image, title, subtitle, price, rating, reviewCount, inheritedStyle} = this.props
    
    return (
      <Vertical
        align={'stretch'}
        width={'grow'}
        height={'shrink'}
        paddingLeft={15}
        paddingTop={10}
        inheritedStyle={inheritedStyle}
      >
        <Horizontal
          align={'center'}
          width={'grow'}
          height={'grow'}
          paddingRight={15}
        >
          <Text
            text={rank}
            color={lightTextColor}
            fontSize={15}
            fontWeight={'normal'}
          />
          <Spacer size={10} />
          <Rectangle
            width={64}
            height={64}
            backgroundColor={'white'}
            backgroundImage={image}
            borderColor={'rgba(0,0,0,0.1)'}
            borderWidth={1}
            borderRadius={15}
          />
          <Spacer size={10} />
          <Vertical
            width={'grow'}
            height={'grow'}
          >
            <Text
              text={title}
              color={'black'}
              fontSize={12}
              fontWeight={'normal'}
            />
            <Text
              text={subtitle}
              color={lightTextColor}
              fontSize={12}
              fontWeight={'normal'}
            />
            <Text
              text={`(${reviewCount})`}
              color={lightTextColor}
              fontSize={12}
              fontWeight={'normal'}
            />
          </Vertical>
          <Vertical
            width={'shrink'}
            height={'grow'}
            align={'center'}
            distribute={'end'}
          >
            <SmallButton
              text={price}
              width={'shrink'}
            />
            <Spacer
              size={2}
            />
            <Text
              text={'In-App Purchases'}
              color={lightTextColor}
              fontSize={8}
              fontWeight={'normal'}
              width={60}
              textAlign={'center'}
            />
          </Vertical>
        </Horizontal>
        <Spacer
          size={10}
        />
        <Horizontal width={'grow'} height={'shrink'} align={'stretch'}>
          <Rectangle 
            height={0.5}
            width={'grow'}
            backgroundColor={'#C5C5C5'}
          />
        </Horizontal>
      </Vertical>
    )
  }
}

export default AppSummaryRow