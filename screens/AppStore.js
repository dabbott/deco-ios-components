/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, } from 'react'
import { Rectangle, Circle, Text, Triangle, Chevron } from '../primitives'
import { Horizontal, Vertical, VerticalScroll, Spacer } from '../layout'
import { BigButton, SmallButton, AppIcon } from '../atoms'
import { AppCardSmall } from '../molecules'
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
        <Vertical
          distribute={'start'} 
          align={'stretch'} 
          height={'grow'}
          paddingHorizontal={20}
        >
          <Horizontal height={'shrink'} justifyContent={'space-between'} marginVertical={10}>
            <SmallButton text={'Small Button A'} />
            <Spacer size={10} />
            <SmallButton text={'Small Button B'} />
          </Horizontal>
        </Vertical>
      </VerticalScroll>
    );
  }
}

export default AppStore
