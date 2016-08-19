import React, { Component, } from 'react'
import { View, } from 'react-native'
import { Text, Chevron, Rectangle } from '../primitives'
import { Horizontal, Vertical, Spacer } from '../layout'
import { AppCardSmall } from '../molecules'

const appIconImage = 'https://moresaucelessfluff.files.wordpress.com/2013/12/jonga-app-icon-1024x1024.png'

class AppCardSmallGallery extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Vertical align={'stretch'} marginTop={19}>
        <Horizontal distribute={'start'} align={'bottom'}>
          <Text
            text={'New Apps We Love'}
            fontSize={17}
            color={'black'}
            width={'grow'}
            verticalAlign={'baseline'}
          />
          <Text
            text={'See All'}
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
        <Horizontal align={'top'} distribute={'start'}>
          <AppCardSmall image={appIconImage} title={'Diffission'} subtitle={'Games'} />
          <Spacer size={10} />
          <AppCardSmall image={appIconImage} title={'Diffission'} subtitle={'Games'} price={'$2.99'} />
          <Spacer size={10} />
          <AppCardSmall image={appIconImage} title={'Diffission'} subtitle={'Games'} />
          <Spacer size={10} />
          <AppCardSmall image={appIconImage} title={'Diffission'} subtitle={'Games'} />
          <Spacer size={10} />
          <AppCardSmall image={appIconImage} title={'Diffission'} subtitle={'Games'} price={'$2.99'} />
          <Spacer size={10} />
          <AppCardSmall image={appIconImage} title={'Diffission'} subtitle={'Games'} />
        </Horizontal>
        <Spacer height={19} />
        <Rectangle height={0.5} width={'auto'} backgroundColor={'#C5C5C5'} />
      </Vertical>
    )
  }
}

export default AppCardSmallGallery