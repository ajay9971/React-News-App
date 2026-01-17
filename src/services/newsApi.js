export const fetchNews = async (query = "", category = "", page = 1) => {
  const res = await fetch(`/api/news?q=${query}&category=${category}&page=${page}`);
  const data = await res.json();
  return data.articles || [];
};
