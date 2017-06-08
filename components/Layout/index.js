import AdSwitcher from '@components/AdSwitcher'

import style from './Layout.sass'

export default ({ children }) => (
  <div className={style.container}>
    <AdSwitcher>Product</AdSwitcher>
    {children}
  </div>
)