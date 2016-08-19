export const normalizeImage = (image) => {
  if (typeof image === 'string') {
    return {uri: image}
  } else {
    return image
  }
}