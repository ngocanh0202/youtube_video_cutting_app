import { useState } from "react";
export default function Search({HandleQuery}){
    const [query, setQuery] = useState("");
    return (
        <div className="Search">
            <input 
                className="SearchInput"
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} />
            <button 
                className="SearchButton"
                onClick={() => HandleQuery(query)}>
                Search
            </button>
        </div>
    );
}