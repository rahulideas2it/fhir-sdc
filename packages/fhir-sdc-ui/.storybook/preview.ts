import React from 'react'
import type { Preview } from '@storybook/react'

import { withSBookMUITheme } from '../lib/subAtomic/withSBookMUITheme'

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

export const decorators = [withSBookMUITheme]

export default preview
