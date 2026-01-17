export default async function handler(req, res) {
  const { q = "", category = "", page = 1 } = req.query;

  const API_KEY = process.env.VITE_API_KEY;
  let url = `https://gnews.io/api/v4/top-headlines?lang=en&country=in&token=${API_KEY}&max=10&page=${page}`;

  if (q) url += `&q=${q}`;
  if (category) url += `&topic=${category}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
