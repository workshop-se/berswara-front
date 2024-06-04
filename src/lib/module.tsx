const HOST = process.env.HOST_QUIZ || 'https://wrpl.yazidrizkik.dev/api/content';

interface Module {
  id: number;
  title: string;
  url: string;
  thumbnail: string;
}

const getModules = async (page: number, limit: number) => {
  try {
    const response = await fetch(`${HOST}/modules?page=${page}&limit=${limit}`);
    if (response.status !== 200) {
      throw new Error("Error fetching questions");
    }
    const data = await response.json();
    const formattedModules = data.data.modules.map((module: { id: number; title: string; url: string; thumbnail: string; }) => ({
      id: module.id,
      title: module.title,
      url: module.url,
      thumbnail: module.thumbnail
    }))
    return formattedModules;
  } catch (error) {
    return {
      error: true,
      message: error,
      modules: [],
    }
  }
}

export { getModules };
export type { Module };
