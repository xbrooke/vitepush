import DefaultTheme from 'vitepress/theme'
import './style/overwrite.css'
import './style/style.css'
const theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {

  }
}

export default theme