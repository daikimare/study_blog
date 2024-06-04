'use client'
import { type ChangeEventHandler, useCallback, useState, type FC, MouseEventHandler, useMemo } from 'react'

type ButtonEventType = MouseEventHandler<HTMLButtonElement> | undefined

const Page: FC = () => {
  const [tagId, setTagId] = useState(0)
  const [data, setData] = useState("")

  const fetchData: ButtonEventType = useCallback(async () => {
    const res = await fetch(`https://qiita.com/api/v2/tags/${tagId}/items?page=1&per_page=20`)
    const r = await res.json()
    const s = JSON.stringify(r)
    setData(s)

    return console.log(data)
  }, [tagId, data])

  const onChangeDispacher = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    setTagId(Number(e.target.value))
  }, [])

  return (
    <>
      <h1>Main Page</h1>
      <p>Page content</p>
      <p>fetchAPIを使ってデータを取得してみましょう</p>
      <input type='number' value={tagId} onChange={onChangeDispacher} />
      <button onClick={fetchData}>Fetch Data</button>
      <div>
        <h2>取得したデータ</h2>
        <p>取得したデータを表示します</p>
        <p>{data}</p>
      </div>
    </>
  )
}
export default Page
