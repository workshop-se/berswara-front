'use client'
import { getThreadById } from '@/lib/forum';
import { useEffect } from 'react'
export default function Page({ params }: { params: { id: string } }) {
  useEffect(() => {
    const fetchThread = async () => {
      const data = await getThreadById(params.id);
      console.log(data)
    }
    fetchThread();
  }, [])
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  )
}
