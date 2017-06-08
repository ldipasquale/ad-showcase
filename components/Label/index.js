import style from './Label.sass'

export default ({ children }) => (
  <div className={style.container}>
    {children}
  </div>
)