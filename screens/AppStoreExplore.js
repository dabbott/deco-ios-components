import React, { Component, } from 'react'
import { Rectangle, Circle, Text, Triangle, Chevron } from '../primitives'
import {
  Horizontal,
  Vertical,
  VerticalScroll,
  Spacer,
} from '../layout'
import {
  BigButton,
  SmallButton,
  AppIcon,
  MediumButton,
} from '../atoms'
import {
  AppCardSmall,
  TextHeader,
  TextLinkRow,
} from '../molecules'
import { AppCardSmallGallery } from '../compositions'
import { data } from '../config'

class AppStore extends Component {
  render() {
    const {inheritedStyle} = this.props
    
    return (
      <VerticalScroll
        inheritedStyle={inheritedStyle}
        distribute={'start'} 
        align={'stretch'} 
        height={'grow'}
        width={'auto'}
        automaticallyAdjustContentInsets={true}
      >
        <AppCardSmallGallery
          title={'Popular Near Me'}
          action={'See All'}
          list={data.apps}
        />
        <TextHeader
          text={'Quick Links'}
        />
        {data.categories.map(c => <TextHeader key={c} text={c} dividerType={'padded'} />)}
      </VerticalScroll>
    );
  }
}

export default AppStore
