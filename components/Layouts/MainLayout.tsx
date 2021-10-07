import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return <div className="relative w-full min-h-screen">{children}</div>
}

export default Layout
