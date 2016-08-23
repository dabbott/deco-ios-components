/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
        <Rectangle
          width={'auto'}
          height={152}
          backgroundColor={'black'}
          backgroundImage={'https://hd.unsplash.com/photo-1445295029071-5151176738d0'}
        />
        <AppCardSmallGallery
          title={'Apple Apps'}
          action={'See All'}
          list={data.apps}
        />
        <AppCardSmallGallery
          title={'Favorite New Apps'}
          action={'See All'}
          list={data.apps.slice(4).concat(data.apps.slice(0, 4))}
        />
        <AppCardSmallGallery
          title={'Follow Team USA'}
          action={'See All'}
        />
        <AppCardSmallGallery
          title={'Sprint to the Finish'}
          action={'See All'}
        />
        <TextHeader
          text={'Quick Links'}
        />
        <TextLinkRow text={'Apps Made by Apple'} />
        <TextLinkRow text={'Apps for Apple Watch'} />
        <TextLinkRow text={'Editor\'s Choice'} />
        <TextLinkRow text={'Apps in Spanish'} />
        <TextLinkRow text={'Buy with Apple Pay'} />
        <TextLinkRow text={'Parents\' Guide to iTunes'} />
        <TextLinkRow text={'Learn More About In-App Purchases'} />
        <Spacer
          size={15}
        />
        <Horizontal
          width={'grow'}
          height={'grow'}
          paddingHorizontal={15}
        >
          <MediumButton
            text={'Redeem'}
            width={'grow'}
          />
          <Spacer
            size={10}
          />
          <MediumButton
            text={'Send Gift'}
            width={'grow'}
          />
        </Horizontal>
        <Spacer
          size={10}
        />
        <Horizontal
          width={'grow'}
          height={'grow'}
          paddingHorizontal={15}
        >
          <MediumButton
            text={'Apple ID: deco@gmail.com'}
            width={'grow'}
          />
        </Horizontal>
        <Spacer
          size={15}
        />
      </VerticalScroll>
    );
  }
}

export default AppStore
