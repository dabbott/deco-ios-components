import React, { Component, } from 'react'
import { View, } from 'react-native'
import { Text, Chevron, Rectangle } from '../primitives'
import { Horizontal, HorizontalScroll, Vertical, Spacer } from '../layout'
import { AppSummaryRow } from '../molecules'

class AppSummaryList extends Component {

  static propTypes = {}

  static defaultProps = {
    list: [],
  }

  render() {
    const {list} = this.props
    
    const items = list.map(({id, name, category, rating, reviewCount, icon}, i) => {
      return (
        <AppSummaryRow
          key={id}
          rank={i + 1}
          image={icon}
          title={name}
          subtitle={category}
          price={'$6.99'}
          rating={rating}
          reviewCount={reviewCount}
        />
      )
    })
    
    return (
      <Vertical width={'grow'} height={'shrink'}>
        {items}
      </Vertical>
    )
  }
}

export default AppSummaryList