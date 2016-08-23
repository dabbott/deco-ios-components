import React, { Component, } from 'react'
import { View, TouchableOpacity } from 'react-native'
import {
  Rectangle,
  Text,
} from '../primitives'
import {
  SmallButton,
  OutlinedImage,
  HairlineDivider,
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
    const {rank, image, title, subtitle, buttonText, rating, reviewCount, inheritedStyle} = this.props
    
    return (
      <Vertical
        align={'stretch'}
        width={'grow'}
        height={'shrink'}
        paddingLeft={15}
        inheritedStyle={inheritedStyle}
      >
        <Horizontal
          align={'center'}
          width={'grow'}
          height={'grow'}
          paddingVertical={10}
          paddingRight={15}
        >
          <Text
            text={rank}
            color={lightTextColor}
            fontSize={20}
            fontWeight={'300'}
          />
          <Spacer size={10} />
          <OutlinedImage
            width={64}
            height={64}
            borderRadius={14}
            backgroundImage={image}
          />
          <Spacer size={10} />
          <Vertical
            width={'grow'}
            height={'grow'}
            distribute={'center'}
          >
            <Text
              text={title}
              color={'black'}
              fontSize={14}
              fontWeight={'normal'}
            />
            <Spacer
              size={2}
            />
            <Text
              text={subtitle}
              color={lightTextColor}
              fontSize={12}
              fontWeight={'normal'}
            />
            <Spacer
              size={3}
            />
            <Text
              text={`(${reviewCount})`}
              color={lightTextColor}
              fontSize={11}
              fontWeight={'normal'}
            />
          </Vertical>
          <SmallButton
            text={buttonText}
            width={'shrink'}
          />
        </Horizontal>
        <HairlineDivider />
      </Vertical>
    )
  }
}

export default AppSummaryRow