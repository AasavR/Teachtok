export const colors = {
  primary: '#345db',
  secondary: '#efefef',
  
  text: {
    dark: '#333333',
    light: '#f5f5f5'
  },
  
  button: {
    default: '#345db',
    danger: '#d93120'
  }
}

export const padding = {
  small: 10, 
  medium: 20,
  large: 30 
}

export const fonts = {
  size: {
    small: 12,
    medium: 16,
    large: 28
  }
}

// Typography presets
export const displayH1 = {
  fontSize: fonts.size.large,
  color: colors.text.dark
}

export default {
  colors,
  padding,
  fonts
}
