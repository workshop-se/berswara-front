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
  repliesCount: number;
  likes: number
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

interface myReply {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: {
    id: string;
    username: string;
  };
  thread: {
    id: string;
    title: string;
  };
}

interface User {
  email: string;
  avatar: string;
  fullname: string;
  username: string;
  password: string;
}

export type { Thread, Reply, User, myReply };
