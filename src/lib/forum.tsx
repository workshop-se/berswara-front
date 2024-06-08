const HOST = process.env.HOST_FORUM || 'http://localhost:3002';

interface Thread {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  owner: {
    id: string;
    username: string;
  }
}

const getThreads = async (page: number, size: number) => {
  try {
    const response = await fetch(`${HOST}/threads?page=${page}&size=${size}`);
    if (response.status !== 200) {
      throw new Error("Error fetching questions");
    }
    const data = await response.json();
    const formattedThreads = data.data.threads.map((thread:Thread) => ({
      id: thread.id,
      title: thread.title,
      body: thread.body,
      createdAt: thread.createdAt,
      updatedAt: thread.updatedAt,
      owner: {
        id: thread.owner.id,
        username: thread.owner.username
      }
    }))
    return formattedThreads
  } catch (error) {
    return {
      error: true,
      message: error,
      modules: [],
    }
  }
}

export { getThreads };
export type { Thread };
