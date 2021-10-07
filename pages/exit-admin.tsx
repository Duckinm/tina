import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useEditState } from 'tinacms/dist/edit-state'

const GoToEditPage: NextPage = () => {
  const { setEdit } = useEditState()
  const router = useRouter()

  useEffect(() => {
    setEdit(false)
    router.back()
  }, [router, setEdit])

  return <div>exit edit this page.</div>
}

export default GoToEditPage
