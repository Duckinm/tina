import { Abstract } from 'components/Abstract'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <article className="relative w-full min-h-screen py-16 overflow-hidden">
      <Abstract />
      {children}
    </article>
  )
}

export default Layout
