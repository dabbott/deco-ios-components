import React from 'react'

export const isNumericDimension = (dimension) => {
  return typeof dimension === 'number'
}

export const isAutoDimension = (dimension) => {
  return dimension === 'grow' || dimension === 'shrink'
}

export const isValidDimension = (dimension) => {
  return isNumericDimension(dimension) || isAutoDimension(dimension)
}

const determinePrimaryAxisFlex = (dimension) => {
  return dimension === 'grow' ? 1 : 0
}

const determineCrossAxisAlignment = (dimension, parentAlign) => {
  if (dimension === 'grow') {
    return 'stretch'
  }
  
  if (! parentAlign || parentAlign === 'stretch') {
    return 'flex-start'
  }
  
  return parentAlign
}

export const calculateDimensions = (style, inheritedStyle = {}) => {
  const {width, height} = style
  const {flexDirection, alignItems} = inheritedStyle
  const computedStyle = {}

  if (isAutoDimension(width)) {
    if (flexDirection === 'row') {
      computedStyle.flex = determinePrimaryAxisFlex(width)
    
    // Default is column, even when not specified
    } else {
      computedStyle.alignSelf = determineCrossAxisAlignment(width, alignItems)
    }
  } else if (isNumericDimension(width)) {
    computedStyle.width = width
  }

  if (isAutoDimension(height)) {
    if (flexDirection === 'row') {
      computedStyle.alignSelf = determineCrossAxisAlignment(height, alignItems)
      
    // Default is column, even when not specified
    } else {
      computedStyle.flex = determinePrimaryAxisFlex(height)
    }
  } else if (isNumericDimension(height)) {
    computedStyle.height = height
  }

  return computedStyle
}

export const convertAlign = (align) => {
  if (align === 'top' || align === 'left') {
    return 'flex-start'
  }
  
  if (align === 'bottom' || align === 'right') {
    return 'flex-end'
  }
  
  return align
}

export const convertDistribute = (distribute) => {
  if (distribute === 'start') {
    return 'flex-start'
  }
  
  if (distribute === 'end') {
    return 'flex-end'
  }
  
  return distribute
}

export const cloneWithInheritedStyle = (children, inheritedStyle) => {
  return React.Children.map(children, child => {
    if (! child) return child

    return React.cloneElement(child, {inheritedStyle})
  })
}

const propsForCategory = {
  padding: [
    'padding',
    'paddingHorizontal',
    'paddingVertical',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
  ],
  margin: [
    'margin',
    'marginHorizontal',
    'marginVertical',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
  ],
}

export const extractProps = (source, ...categories) => {
  const extracted = {}
  
  categories.forEach(category => {
    const list = propsForCategory[category] || []
    list.forEach(prop => {
      if (typeof source[prop] !== 'undefined') {
        extracted[prop] = source[prop]
      }
    })
  })
  
  return extracted
}

export const reactNativeParentStyle = {
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
}
