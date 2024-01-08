import { useMemo } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Palette from './palette'
import Typography from './typography'
import CustomShadows from './shadows'
import componentsOverride from './overrides'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/material-icons'

// Supports weights 100-900
import '@fontsource-variable/inter'

// Supports weights 100-900
import '@fontsource-variable/public-sans'

export const MUIThemeProvider = ({ children }: any) => {
  const themeKey = 'dark'
  const theme = useMemo(() => Palette(themeKey), [themeKey])
  const themeTypography = Typography(`'Public Sans Variable', sans-serif`)
  const themeCustomShadows = useMemo(() => CustomShadows(theme), [theme])

  const themeOptions: any = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536,
        },
      },
      direction: 'ltr',
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      palette: theme.palette,
      customShadows: themeCustomShadows,
      typography: themeTypography,
    }),
    [theme, themeTypography, themeCustomShadows]
  )

  const themes = createTheme(themeOptions)
  themes.components = componentsOverride(themes)

  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
