import { useEffect, useState } from "react";

export default function Favorites() {
const[saved,setSaved]=useState([]);
console.log("Saved from localStorage:", saved);

useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("saved"))||[];
    setSaved(data)

},[])

    const removItem = (url) => {
        const updated = saved.filter(item => item.url !== url);
        setSaved(updated);
        localStorage.setItem("saved", JSON.stringify(updated));

    }

    return (
        <div className="container">
            <h1> Saved Articles</h1>
            {saved.length === 0 && <p>No Favorites Saved </p>}

            <div className="grid" >
                {saved.map((article, index) => (
                    <div className="card" key={index}>
                        {article.image && <img src={article.image} alt="" />}
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <p>{article.source?.name}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>

                        <button onClick={() => removItem(article.url)} className="fav-btn">
                            Remove
                        </button>
                    </div>
                ))}
            </div>

        </div>
    )
}