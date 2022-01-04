import { useState } from "react"

type EditFolderFormProps = {
    onToggle: () => void
}

const EditFolderForm = ({onToggle}: EditFolderFormProps) => {
    const [title, setTitle] = useState()
    const onSubmit = () => {

    }
    
    return (
        <div>
            <div className="w-screen h-screen bg-stone-900/50 absolute top-0 left-0" onClick={onToggle}></div>

            <form 
                onSubmit={onSubmit}
                className="border rounded-lg border-black w-11/12 flex flex-col m-auto absolute left-0 right-0 top-1/4 bg-white "
            >
                <h3 className="m-3">フォルダの編集</h3>
                <label htmlFor="title">タイトル</label>
                <input type="text" 
                    name="title" 
                    id="title" 
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}} 
                    className="w-11/12 border border-black" 
                />

                <input type="submit" value="完了" className="border border-black rounded-lg bg-gray-400 "/>
            </form>
        </div>
    )
}

export default EditFolderForm