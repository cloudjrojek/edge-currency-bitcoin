import type { EngineCurrencyInfo } from '../engine/currencyEngine.js'
import type { NetworkInfo } from '../utils/bcoinUtils/types.js'
// @flow
import type { EdgeCurrencyInfo } from '../utils/flowTypes.js'
import { imageServerUrl } from './constants.js'

const bcoinInfo: NetworkInfo = {
  type: 'dash',
  magic: 0xd9b4bef9,
  supportedBips: [44, 32],
  keyPrefix: {
    privkey: 0xcc,
    xpubkey: 0x02fe52cc,
    xprivkey: 0x02fe52f8,
    xpubkey58: 'xpub',
    xprivkey58: 'xprv',
    coinType: 5
  },
  addressPrefix: {
    pubkeyhash: 0x4c,
    scripthash: 0x10
  }
}

const engineInfo: EngineCurrencyInfo = {
  network: 'dash',
  currencyCode: 'DASH',
  gapLimit: 10,
  maxFee: 100000,
  defaultFee: 10000,
  feeUpdateInterval: 60000,
  customFeeSettings: ['satPerByte'],
  simpleFeeSettings: {
    highFee: '300',
    lowFee: '100',
    standardFeeLow: '150',
    standardFeeHigh: '200',
    standardFeeLowAmount: '20000000',
    standardFeeHighAmount: '981000000'
  }
}

const currencyInfo: EdgeCurrencyInfo = {
  // Basic currency information:
  currencyCode: 'DASH',
  currencyName: 'Dash',
  pluginName: 'dash',
  denominations: [
    { name: 'DASH', multiplier: '100000000', symbol: 'Ð' },
    { name: 'mDASH', multiplier: '100000', symbol: 'mÐ' }
  ],

  // Configuration options:
  defaultSettings: {
    customFeeSettings: ['satPerByte'],
    electrumServers: [
      'electrum://electrum.dash.siampm.com:50001',
      'electrum://e-1.claudioboxx.com:50005',
      'electrum://electrum.leblancnet.us:50015',
      'electrums://e-1.claudioboxx.com:50006',
      'electrums://ele.nummi.it:50008',
      'electrums://178.62.234.69:50002',
      'electrum://178.62.234.69:50001',
      'electrums://electrum.leblancnet.us:50016',
      'electrums://electrum.dash.siampm.com:50002'
    ],
    disableFetchingServers: false
  },
  metaTokens: [],

  // Explorers:
  addressExplorer: 'https://live.blockcypher.com/dash/address/%s',
  blockExplorer: 'https://live.blockcypher.com/dash/block/%s',
  transactionExplorer: 'https://live.blockcypher.com/dash/tx/%s',

  // Images:
  symbolImage: `${imageServerUrl}/dash-logo-solo-64.png`,
  symbolImageDarkMono: `${imageServerUrl}/dash-logo-solo-64.png`
}

export const dash = { bcoinInfo, engineInfo, currencyInfo }
