import { useState,useEffect } from "react";
import { copy,linkIcon,loader,tick } from "../assets";

const Demo = () => {
  const [article,setArticle]=useState({url:'',summary:'',});
  const handelSubmit= async (e)=>{
    alert('Submitted');
  }
  return (
    <section className="mt-16 w-full max-w-xl">
      {/**Search Function */}
      <div className="flex flex-col w-full gap-2">
        <form action=" flex justify-center items-center" className="relative" onSubmit={handelSubmit}>
          <img src={linkIcon} alt="link icon" className="absolute left-0 my-2 ml-3 w-5"/>
          <input type="url" placeholder="Enter The Url" value={article.url} required onChange={(e)=>setArticle({article,url:e.target.value})} className="url_input peer-focus:border-gray-700 peer-focus:text-gray-700" />
          <button type="submit" className="submit_btn">⏎</button>
        </form>
        {/**Hisory */}

      </div>
      {/**Result */}
    </section>
  )
}

export default Demo