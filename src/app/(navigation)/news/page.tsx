'use client'

import { NewsController } from "@/modules/features/news/news.controller"

export default function Page() {
  const newsController = new NewsController()
  return newsController.getNews({ page: 1, size: 10 })
}

