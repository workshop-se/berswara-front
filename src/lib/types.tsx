interface Thread {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  owner: {
    id: string;
    username: string;
  };
  numberOfReplies: number;
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

interface User {
  email: string;
  avatar: string;
  fullname: string;
  username: string;
  password: string;
}

export type { Thread, Reply, User };
