import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState(" ");

    function handleResponse(response){
        console.log(response);
    }

    function search (event){
      event.preventDefault();

      //documentation https://www.shecodes.io/learn/apis/dictionary
      let apiKey = `fdo0da8da8fd60t560b33ec66f43f0c4`;
      let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);
    }
    function handleKeywordChange(event){
        setKeyword(event.target.value)
    }
    return <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} />
        </form>
    </div>;
}