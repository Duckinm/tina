import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useEditState } from 'tinacms/dist/edit-state'

const GoToEditPage: NextPage = () => {
  const { setEdit } = useEditState()
  const router = useRouter()

  useEffect(() => {
    setEdit(true)
    router.back()
  }, [router, setEdit])

  return <div>Entering edit mode..</div>
}

export default GoToEditPage
