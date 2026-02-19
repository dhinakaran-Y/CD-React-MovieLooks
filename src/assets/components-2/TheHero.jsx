import { useState } from "react"

const TheHero = () => {

    const [titleVal, setTitleVal] = useState()
    const [articleVal , setArticleVal] = useState()

    const [title, setTitle ] = useState("Title");
    const [article , setArticle] = useState("Your Article Content")

    
    function updateArticle(e) {
        e.preventDefault()
        
        if(titleVal.length > 3) setTitle(titleVal);
        if(articleVal.length > 3) setArticle(articleVal);
    }
    
    return (
      <>
        <form
          className="my-10 space-y-2 w-2xl mx-auto"
          id="form"
          onSubmit={updateArticle}>
          <h3 className=" text-center text-2xl font-semibold text-blue-600">
            Write Your Article
          </h3>
          <div className=" border rounded-2xl bg-gray-100">
            <input
              id="title"
              type="text"
              onInput={(e) => setTitleVal(e.target.value.trim())}
              className="border-b px-7 outline-blue-600 p-3 pb-2 w-full placeholder:font-semibold rounded-t-2xl"
              placeholder="Title"
            />
            <div className="relative">
              <textarea
                id="article"
                placeholder="🖋️ write your article here..."
                onChange={(e) => setArticleVal(e.target.value.trim())}
                className="w-full rounded-b-2xl outline-blue-600 resize-none p-7"
                rows={5}></textarea>
              <button
                type="submit"
                className="bg-blue-500 absolute right-1 hover:bg-blue-600 text-white cursor-pointer bottom-2 rounded px-3 py-1 mx-2">
                Post
              </button>
            </div>
          </div>
        </form>
        {/* article */}
        <div className="w-3xl min-h-28 border rounded-2xl mx-auto p-5">
          <h2 className="text-center text-2xl font-semibold underline">
            {title ?? "Title"}
          </h2>
          <p className="p-5 indent-3">{article ?? "Your Article Content"}</p>
        </div>
      </>
    );
}

export default TheHero