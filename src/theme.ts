import { createTheme } from '@material-ui/core/styles'
import config from '../config'

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: config.PALETTE.TEXT_PRIMARY
    },
    primary: {
      main: config.PALETTE.COLOR_PRIMARY
    },
    secondary: {
      main: config.PALETTE.COLOR_SECONDARY
    },
    background: {
      default: config.PALETTE.BACKGROUND_PRIMARY
    }
  },
  typography: {
    allVariants: {
      color: config.PALETTE.TEXT_PRIMARY
    }
  }
})

export default theme
