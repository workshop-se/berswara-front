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

export type { Thread };
