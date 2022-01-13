import React, { useState } from "react"
import CrudFolderForm from "./CrudFolderForm"

type EditFolderFormProps = {
    onToggle: () => void
    id: number
    title: string
    changeTitle: (title: string) => void
    onUpdate: (id: number) => void
}

const EditFolderForm = ({ onToggle, id, title, changeTitle, onUpdate }: EditFolderFormProps) => {
    
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

        onUpdate(id)
        onToggle()
        // window.location.href = '/'
    }
    
    return (
        <CrudFolderForm changeTitle={changeTitle} onSubmit={onSubmit} onToggle={onToggle} header={'フォルダの編集'} value={'更新'} title={title} />
    )
}

export default EditFolderForm