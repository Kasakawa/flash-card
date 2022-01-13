import React, { useState } from "react"
import CrudFolderForm from "./CrudFolderForm"

interface addFolderFormProps {
    onToggle: () => void
    onAdd: (folder: {title: string}) => void
}

const AddFolderForm = ( { onToggle, onAdd }: addFolderFormProps ) => {
    const [title, setTitle] = useState('')
    const changeTitle = (title: string) => {
        setTitle(title)
    }
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!title) {
            alert('タイトルを入力してください')
            return
        }

        if (title.length > 255) {
            alert('256文字以上は設定できません')
            return
        }
      
        onAdd({ title })
        setTitle('')
        onToggle()
        // window.location.href = '/'
    }
    
    return (
        <CrudFolderForm changeTitle={changeTitle} onSubmit={onSubmit} onToggle={onToggle} header={'フォルダの新規作成'} value={'作成'} title={title} />
    )
}

export default AddFolderForm