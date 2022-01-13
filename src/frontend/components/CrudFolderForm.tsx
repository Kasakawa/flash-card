import React, { useState } from "react"

type CrudFolderFormProps = {
    onSubmit: (e: React.FormEvent) => void
    header: string
    onToggle: () => void
    title: string
    value: string
    changeTitle: (title: string) => void
}

const CrudFolderForm = ({ onSubmit, header, onToggle, title, value, changeTitle }: CrudFolderFormProps) => {
    return(
        <div>
            <div className="w-screen h-screen bg-stone-900/50 fixed top-0 left-0" onClick={onToggle}></div>

            <form onSubmit={onSubmit}>
                <h3 className="m-3">{header}</h3>
                <label htmlFor="title">タイトル :</label>
                <input type="text" 
                    name="title" 
                    id="title" 
                    value={title} 
                    onChange={(e) => {changeTitle(e.target.value)}} 
                    className="w-11/12 border border-black" 
                />

                <input type="submit" value={value} className="input-button"/>
            </form>
        </div>
    )
}

export default CrudFolderForm