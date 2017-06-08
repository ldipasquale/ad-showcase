import AdSwitcherIcon from './AdSwitcherIcon'

import style from './AdSwitcher.sass'

export default ({ children }) => (
  <div>
    <div>
      <AdSwitcherIcon />
    </div>

    <div>
    {children}
    </div>
  </div>
)