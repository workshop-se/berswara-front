'use server'
import { cookies } from 'next/headers'
import { Thread, Reply } from './types';

const HOST = process.env.HOST_FORUM || 'http://localhost:3002';

const getThreads = async (page: number, size: number) => {
  try {
    const response = await fetch(`${HOST}/threads?page=${page}&size=${size}`);
    if (response.status !== 200) {
      throw new Error("Error fetching questions");
    }
    const data = await response.json();
    const formattedThreads = data.data.threads.map((thread: Thread) => { 
      return {
      id: thread.id,
      title: thread.title,
      body: thread.body,
      createdAt: thread.createdAt,
      updatedAt: thread.updatedAt,
      owner: {
        id: thread.owner.id,
        username: thread.owner.username
      },
      numberOfReplies: -1,
      replies: []
    }})
    return formattedThreads
  } catch (error) {
    return {
      error: true,
      message: error,
    }
  }
}

const postThread = async (title: string, body: string) => {
  try {
    const postData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies().get('accessToken')?.value}`
      },
      body: JSON.stringify({ title, body }),
    }
    const response = await fetch(`${HOST}/threads`, postData);
    const data = await response.json();
    return { data };
  } catch (error) {
    return {
      error: true,
      message: error,
    }
  }
}

const getThreadById = async (id: string) => {
  try {
    const response = await fetch(`${HOST}/threads/${id}`);
    const data = await response.json();
    const thread = data.data.thread
    const formattedThread: Thread = {
      id: thread.id,
      title: thread.title,
      body: thread.body,
      createdAt: thread.createdAt,
      updatedAt: thread.updatedAt,
      numberOfReplies: thread.replies.length,
      owner: {
        id: thread.owner.id,
        username: thread.owner.username,
      },
      replies: thread.replies.map((reply: any) => ({
        id: reply.id,
        content: reply.content,
        createdAt: reply.createdAt,
        updatedAt: reply.updatedAt,
        owner: {
          id: reply.owner.id,
          username: reply.owner.username,
        },
        replies: reply.replies ? reply.replies.map((nestedReply: any) => ({
          id: nestedReply.id,
          content: nestedReply.content,
          createdAt: nestedReply.createdAt,
          updatedAt: nestedReply.updatedAt,
          owner: {
            id: nestedReply.owner.id,
            username: nestedReply.owner.username,
          },
          replies: nestedReply.replies || [],
        })) : [],
      })),
    };
    return formattedThread;
  } catch (error) {
    return {
      error: true,
      message: error,
    }
  }
}

export { getThreads, postThread, getThreadById };
