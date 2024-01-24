import React from 'react'
import { Image } from 'react-native'
import Utilities from '../../utilities/Utilities'

interface Props {
  icon: 'close'
}

export const Icon = (props: Props) => {
  const { icon } = props
  const iconSelected = Utilities.getIcon(icon)
  return <Image source={iconSelected} />
}
