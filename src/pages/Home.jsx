import { useState } from "react";
import { fetchNews } from "../services/newsApi";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import NewsCard from "../components/NewsCard";

export default function Home() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [page, setPage] = useState(1);

    const loadNews = async () => {
        setLoading(true);
        const data = await fetchNews(search, category, page);
        setArticles(data);
        setLoading(false);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            loadNews();
        }, 600)
        return () => clearTimeout(timeout);
    }, [category, page, search]);
    return (
        <>
            <Navbar setCategory={setCategory} />
            <div className="container">
                <SearchBar search={search} setSearch={setSearch} onSearch={loadNews} />
                {loading && (<div className="grid">

                    {loading ? 
                        Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="skeleton"></div>)) :
                            articles.map((article,i)=>(
                             <NewsCard  key={i} article={article}/>)
                            )

                    }
                </div>

                )}
                <div className="grid">
                    {!loading && articles.map((article, i) => (
                        <NewsCard key={i} article={article} />
                    ))}
                </div>
            </div>

            <div style={{ textAlign: "center", margin: "20px" }}>
                <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>Previous</button>
                <span>Page{page}</span>
                <button onClick={() => setPage(p => p + 1)}>Next</button>
            </div>

        </>
    )
}