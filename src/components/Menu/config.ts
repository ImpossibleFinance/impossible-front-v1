import { MenuEntry } from 'uikit'

const config: MenuEntry[] = [
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: 'https://impossible-swap-v1.netlify.app/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://impossible-swap-v1.netlify.app/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
]

export default config
