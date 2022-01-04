import { useState } from "react"

const CrudFolderForm = ({}) => {
    return(
        <div>
            <div className="w-screen h-screen bg-stone-900/50 absolute top-0 left-0" onClick={onToggle}></div>

            <form 
                onSubmit={onSubmit}
                className="border rounded-lg border-black w-11/12 flex flex-col m-auto absolute left-0 right-0 top-1/4 bg-white "
            >
                <h3 className="m-3">フォルダの新規作成</h3>
                <label htmlFor="title">タイトル</label>
                <input type="text" 
                    name="title" 
                    id="title" 
                    value={title} 
                    onChange={(e) => {setTitle(e.target.value)}} 
                    className="w-11/12 border border-black" 
                />

                <input type="submit" value="作成" className="border border-black rounded-lg bg-gray-400 "/>
            </form>
        </div>
    )
}

export default CrudFolderForm