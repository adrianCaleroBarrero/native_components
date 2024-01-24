class Utilities {
  static getIcon(icon: string) {
    switch (icon) {
      case 'close':
        return require('../icons/close.png')
      default:
        break
    }
  }
}

export default Utilities
