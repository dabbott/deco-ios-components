import React, { Component } from 'react'
import { View, NavigatorIOS, TabBarIOS } from 'react-native'
import { Vertical } from '../layout'
import { AppStoreFeatured, AppStoreTopCharts } from '../screens'
import { icons } from '../assets'

const tabs = [
  {title: 'Featured', icon: 'star'},
  {title: 'Top Charts', icon: 'topCharts'},
  {title: 'Explore', icon: 'explore'},
  {title: 'Search', icon: 'search'},
  {title: 'Updates', icon: 'updates'},
]

class AppStoreApp extends Component {
  state = {
    tab: 'Top Charts',
  }
  
  renderContent(tab) {
    switch (tab) {
      case 'Featured':
        return (
          <NavigatorIOS
            initialRoute={{
              component: AppStoreFeatured,
              title: 'Featured',
              leftButtonTitle: 'Categories',
              rightButtonIcon: {uri: icons.navbarMenu, scale: 2},
              translucent: true,
            }}
            style={{flex: 1}}
          /> 
        )
      case 'Top Charts':
        return (
          <NavigatorIOS
            initialRoute={{
              component: AppStoreTopCharts,
              title: 'Top Charts',
              leftButtonTitle: 'Categories',
              rightButtonIcon: {uri: icons.navbarMenu, scale: 2},
              translucent: true,
            }}
            style={{flex: 1}}
          /> 
        )
      default:
        return <View />
    }
  }
  
  renderTabs(tabs) {
    return tabs.map(({title, icon}, i) => {
      return (
        <TabBarIOS.Item
          key={i}
          title={title}
          icon={{uri: icons[icon], scale: 2}}
          selectedIcon={{uri: icons[icon + 'Selected'], scale: 2}}
          selected={this.state.tab === title}
          onPress={() => this.setState({tab: title})}
        >
          {this.renderContent(title)}
        </TabBarIOS.Item>
      )
    })
  }
  
  render() {
    return (
      <Vertical
        height={'grow'}
        width={'grow'}
      >
        <TabBarIOS style={{flex: 1}}>
          {this.renderTabs(tabs)}
        </TabBarIOS>
      </Vertical>
    );
  }
}

export default AppStoreApp
