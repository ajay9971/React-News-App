import { useEffect, useState } from "react";

export default function NewsCard({ article }) {
    const[isSaved,setIsSaved]=useState(false);
    useEffect(()=>{
        const saved = JSON.parse(localStorage.getItem("saved"))||[];
        const exist = saved.find(item=>item.url===article.url);
        if (exist){
            setIsSaved(true);
        }

    },[article.url]);

    const handleSave = ()=>{
        if(isSaved)return;

        const saved = JSON.parse(localStorage.getItem("saved"))||[];
        localStorage.setItem("saved",JSON.stringify([...saved,article]));
        setIsSaved(true);
    };
    return (
        <div className="card">
            {article.image && <img src={article.image} alt="" />}
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p>{article.source?.name}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>

   <button onClick={handleSave} className={`fav-btn ${isSaved ? "saved":""}`} disabled={isSaved}>
    {  isSaved ? "Saved": "Save"}
   </button>

        </div>
    );

}