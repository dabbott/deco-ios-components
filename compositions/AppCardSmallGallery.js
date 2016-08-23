import { HairlineDivider } from '../atoms'
import React, { Component, } from 'react'
import { View, } from 'react-native'
import { Text, Chevron, Rectangle } from '../primitives'
import { Horizontal, HorizontalScroll, Vertical, Spacer } from '../layout'
import { AppCardSmall } from '../molecules'

class AppCardSmallGallery extends Component {

  static propTypes = {}

  static defaultProps = {
    horizontalInset: 15,
    title: 'New Apps We Love',
    action: 'See All',
    dividerType: 'padded',
    list: [],
  }

  render() {
    const {title, action, list, horizontalInset, dividerType, inheritedStyle} = this.props
    
    const items = list.map(({id, name, category, icon}, i) => {
      return [
        <AppCardSmall key={id} image={icon} title={name} subtitle={category} />,
        i !== list.length - 1 && <Spacer key={'spacer-' + i} size={10} />,
      ]
    })
    
    const flattened = [].concat.apply([], items);
    
    return (
      <Vertical align={'stretch'} marginTop={19} inheritedStyle={inheritedStyle}>
        <Horizontal distribute={'start'} align={'bottom'} paddingHorizontal={horizontalInset}>
          <Text
            text={title}
            fontSize={17}
            color={'black'}
            width={'grow'}
            verticalAlign={'baseline'}
          />
          <Text
            text={action}
            fontSize={11}
            color={'#666666'}
            fontWeight={'500'}
            verticalAlign={'baseline'}
          />
          <Spacer size={2} />
          <Chevron 
            direction={'right'}
            width={5}
            height={8}
            borderColor={'#666666'}
          />
        </Horizontal>
        <Spacer size={12} />
        <HorizontalScroll
          width={'grow'}
          align={'top'}
          distribute={'start'}
          paddingHorizontal={15}
          contentInset={{right: horizontalInset}}
          snapToInterval={105}
          showsHorizontalScrollIndicator={false}
        >
          {flattened}
        </HorizontalScroll>
        <Spacer height={9} />
        <HairlineDivider type={dividerType} />
      </Vertical>
    )
  }
}

export default AppCardSmallGallery