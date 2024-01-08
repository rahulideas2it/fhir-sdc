import React from 'react'
import type { Preview } from '@storybook/react'

import { withMUITheme } from '../lib/subAtomic/withMUITheme'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/material-icons'

// Supports weights 100-900
import '@fontsource-variable/inter'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export const decorators = [withMUITheme]

export default preview
