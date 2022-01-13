import { useState } from "react"

type AddCardFormProps = {
    onToggle: () => void
    onAdd: (
        card: {
            front: string
            back: string
            note: string
        }
    ) => void
    folderId: number
}

const AddCardForm = ({ onToggle, onAdd, folderId }: AddCardFormProps) => {
    const [front, setFront] = useState('')
    const [back, setBack] = useState('')
    const [note, setNote] = useState('')
    
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!front) {
            alert('表を入力してください')
            return
        }

        if (front.length > 255) {
            alert('256文字以上は入力できません')
            return
        }
        
        if (back.length > 255) {
            alert('256文字以上は入力できません')
            return
        }

        if (note.length > 255) {
            alert('256文字以上は入力できません')
            return
        }
        
        onAdd({ front, back, note })

        setFront('')
        setBack('')
        setNote('')
        onToggle()
        // window.location.href = `/folder/${folderId}`
    }
    
    return(
        <div>
            <div className="w-screen h-screen bg-stone-900/50 fixed top-0 left-0" onClick={onToggle}></div>

            <form onSubmit={onSubmit}>
                <h3 className="m-3">新規作成</h3>
                <label htmlFor="front" className="m-1">表：</label>
                <input type="text" 
                    name="front" 
                    id="front" 
                    value={front} 
                    onChange={(e) => {setFront(e.target.value)}} 
                    className="w-11/12 border border-black" 
                />

                <label htmlFor="back" className="m-1">裏：</label>
                <input type="text" 
                    name="back" 
                    id="back" 
                    value={back} 
                    onChange={(e) => {setBack(e.target.value)}} 
                    className="w-11/12 border border-black" 
                />

                <label htmlFor="note" className="m-1">メモ：</label>
                <input type="text" 
                    name="note" 
                    id="note" 
                    value={note} 
                    onChange={(e) => {setNote(e.target.value)}} 
                    className="w-11/12 border border-black" 
                />

                <input type="submit" value="追加" className="border border-black rounded-lg bg-gray-400 "/>
            </form>
        </div>
    )
}

export default AddCardForm