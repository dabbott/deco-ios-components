import React, { Component, } from 'react'
import { Rectangle, Circle, Text, Triangle, Chevron } from '../primitives'
import { Horizontal, Vertical, VerticalScroll, Spacer } from '../layout'
import { BigButton, SmallButton, AppIcon } from '../atoms'
import { AppSummaryRow } from '../molecules'
import { AppSummaryList } from '../compositions'
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
        <AppSummaryList list={data.apps} />
      </VerticalScroll>
    );
  }
}

export default AppStore
