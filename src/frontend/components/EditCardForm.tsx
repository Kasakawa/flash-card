import React from "react"

type EditCardFormProps = {
    front: string
    back: string
    note: string
    cardId: number
    folderId: number
    onToggle: () => void
    changeFront: (front: string) => void
    changeBack: (back: string) => void
    changeNote: (note: string) => void
    onUpdate: (id: number) => void
}

const EditCardForm = ({ front, back, note, cardId, folderId, onToggle, changeFront, changeBack, changeNote, onUpdate }: EditCardFormProps) => {
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!front) {
            alert('タイトルを入力してください')
            return
        }
        
        onUpdate(cardId)
        onToggle()
        
        const strFolderId = folderId.toString()
        // window.location.href = `/folder/${strFolderId}`
    }
    
    return(
        <div>
            <div className="w-screen h-screen bg-stone-900/50 fixed top-0 left-0" onClick={onToggle}></div>

            <form onSubmit={onSubmit}>
                <h3 className="m-3">新規作成</h3>
                <label htmlFor="front" className="m-1">表</label>
                <input type="text" 
                    name="front" 
                    id="front" 
                    value={front} 
                    onChange={(e) => {changeFront(e.target.value)}} 
                    className="w-11/12 border border-black" 
                />

                <label htmlFor="back" className="m-1">裏</label>
                <input type="text" 
                    name="back" 
                    id="back" 
                    value={back} 
                    onChange={(e) => {changeBack(e.target.value)}} 
                    className="w-11/12 border border-black" 
                />

                <label htmlFor="note" className="m-1">メモ :</label>
                <input type="text" 
                    name="note" 
                    id="note" 
                    value={note} 
                    onChange={(e) => {changeNote(e.target.value)}} 
                    className="w-11/12 border border-black" 
                />

                <input type="submit" value="更新" className="border border-black rounded-lg bg-gray-400 "/>
            </form>
        </div>
    )
}

export default EditCardForm