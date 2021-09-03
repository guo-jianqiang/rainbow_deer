/** @format */

import React from 'react'
import { isEmpty } from '../helpers'
import { getItem } from '../localStorage'
import { ActionInterface, PayloadInterface } from './configurationReducer'

export const SYSTEM_CONFIG = '__system_config__'

export interface ConfigurationContextInterface {
  state: PayloadInterface
  dispatch: (action: ActionInterface) => void
}
const primaryColor =
  getComputedStyle(document.documentElement, null).getPropertyValue('--primary-color') || ''
export const getSystemConfig = () =>
  !isEmpty(getItem(SYSTEM_CONFIG))
    ? getItem(SYSTEM_CONFIG)
    : {
        primaryColor,
        collapsed: true,
      }
const ConfigurationContext = React.createContext<ConfigurationContextInterface>({
  state: getSystemConfig(),
  dispatch: () => {},
})

export default ConfigurationContext
