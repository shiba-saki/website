export default function (width = 600, height = 400, key = ['nature', 'summer', 'light']) {
  return `https://source.unsplash.com/random/${width}x${height}?${key.join(',')}`
}
