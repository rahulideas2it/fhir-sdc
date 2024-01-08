import React, { useMemo } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Palette from './palette'
import Typography from './typography'
import CustomShadows from './shadows'
import componentsOverride from './overrides'

export const withMUITheme = (Component: any, context: any) => {
  const { theme: themeKey } = context.globals
  const theme = useMemo(() => Palette(themeKey), [themeKey])
  const themeTypography = Typography(`'Inter Variable', sans-serif`)
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
      <Component />
    </ThemeProvider>
  )
}
