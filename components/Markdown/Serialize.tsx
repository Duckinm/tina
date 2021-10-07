import Markdown from 'react-markdown'

interface Props {
  source: any
}

export const MarkdownSerialize: React.FC<Props> = ({ source }) => {
  return (
    <Markdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')

          return (
            inline &&
            !match && (
              <code className={className ? className : ''} {...props}>
                {children}
              </code>
            )
          )
        },
      }}
    >
      {source}
    </Markdown>
  )
}
