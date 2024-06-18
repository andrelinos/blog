import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { ThemeProvider } from 'styled-components'

import { router } from '@/routes'
import { GlobalStyle } from '@/styles/global'
import { defaultTheme } from '@/styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Toaster richColors />
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
