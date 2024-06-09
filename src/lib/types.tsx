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
  replies: Reply[];
}

interface Reply {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: {
    id: string;
    username: string;
  }
  replies: Reply[];
}

export type { Thread, Reply };
