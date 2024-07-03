import { forwardRef, ReactNode } from 'react'
import { Prism } from 'react-syntax-highlighter'

interface Props {
  language: string
  PreTag: any
  style: any | undefined
  children: ReactNode
}

const SyntaxHighlighter = forwardRef<any, Props>(
  ({ children, language, style, PreTag }, ref) => {
    return (
      <Prism
        language={language}
        PreTag={PreTag}
        style={style}
        ref={ref}
        showInlineLineNumbers
      >
        {String(children).replace(/\n$/, '')}
      </Prism>
    )
  },
)

SyntaxHighlighter.displayName = 'SyntaxHighlighter'

export { SyntaxHighlighter }
