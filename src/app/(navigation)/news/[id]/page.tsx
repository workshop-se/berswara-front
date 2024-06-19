'use client'
import { NewsPageById } from '@/modules/features/news/News.controller';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <NewsPageById id={params.id}></NewsPageById>
  )
}
