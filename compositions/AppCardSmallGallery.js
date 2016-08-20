import React, { Component, } from 'react'
import { View, } from 'react-native'
import { Text, Chevron, Rectangle } from '../primitives'
import { Horizontal, HorizontalScroll, Vertical, Spacer } from '../layout'
import { AppCardSmall } from '../molecules'

const appIconImage = 'https://moresaucelessfluff.files.wordpress.com/2013/12/jonga-app-icon-1024x1024.png'

class AppCardSmallGallery extends Component {

  static propTypes = {}

  static defaultProps = {
    horizontalInset: 20,
    title: 'New Apps We Love',
    action: 'See All',
    list: [],
  }

  render() {
    const {title, action, list, horizontalInset} = this.props
    
    const items = list.map(({id, name, category, icon}, i) => {
      return [
        <AppCardSmall key={id} image={icon} title={name} subtitle={category} />,
        i !== list.length - 1 && <Spacer key={'spacer-' + i} size={10} />,
      ]
    })
    
    const flattened = [].concat.apply([], items);
    
    return (
      <Vertical align={'stretch'} marginTop={19}>
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
          paddingHorizontal={20}
          contentInset={{right: horizontalInset}}
          snapToInterval={105}
          showsHorizontalScrollIndicator={false}
        >
          {flattened}
        </HorizontalScroll>
        <Spacer height={9} />
        <Horizontal width={'grow'} height={'shrink'} align={'stretch'} paddingLeft={horizontalInset}>
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

export default AppCardSmallGallery