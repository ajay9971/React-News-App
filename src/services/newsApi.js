const API_KEY = "c9d250d877c6bee5f1d5d98f370a3c21";
const BASE_URL="https://gnews.io/api/v4/top-headlines"


export const fetchNews=async(query="",category="", page=1)=>{
    let url = `${BASE_URL}?lang=en&country=in&token=${API_KEY}&page=${page}&max=10`;
    if (query)url +=`&q=${query}`;
    if(category)url +=`&topic=${category}`;
    const res = await fetch(url);
    const data  = await res.json();
    // console.log(data);
    

    return data.articles || [];
        
    
};