export const isNumericDimension = (dimension) => {
  return typeof dimension === 'number'
}

export const isAutoDimension = (dimension) => {
  return dimension === 'grow' || dimension === 'shrink'
}

export const isValidDimension = (dimension) => {
  return isNumericDimension(dimension) || isAutoDimension(dimension)
}

export const calculateDimensions = (style, inheritedStyle = {}) => {
  const {width, height} = style
  const {flexDirection} = inheritedStyle
  const computedStyle = {}

  if (isAutoDimension(width)) {
    if (flexDirection === 'row') {
      computedStyle.flex = width === 'grow' ? 1 : 0
    
    // Default is column, even when not specified
    } else {
      computedStyle.alignSelf = 'stretch'
    }
  } else if (isNumericDimension(width)) {
    computedStyle.width = width
  }

  if (isAutoDimension(height)) {
    if (flexDirection === 'row') {
      computedStyle.alignSelf = 'stretch'
      
    // Default is column, even when not specified
    } else {
      computedStyle.flex = height === 'grow' ? 1 : 0
    }
  } else if (isNumericDimension(height)) {
    computedStyle.height = height
  }

  return computedStyle
}
