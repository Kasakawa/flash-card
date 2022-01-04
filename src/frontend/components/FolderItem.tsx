import Link from "next/link"
import { AiFillMinusCircle } from "react-icons/ai"
import { server } from "../config"

type FolderItemProps = {
    folder: {
        id: number
        title: string
    }
    showEdit: boolean
    onDelete: (id: number) => void
    onToggle: () => void
}

const FolderItem = ({ folder, showEdit, onDelete, onToggle }: FolderItemProps) => {
    const inputTitle = async (id: number) => {
        onToggle()
        const res = await fetch(`${server}/api/v1/folders/${id}`)
        const data = await res.json()

        console.log(data)
    }

    return (
        <>
        {
            showEdit ? 
                <div onClick={() => inputTitle(folder.id)} className="border-2 border-gray-600	border-solid rounded mt-1 h-16">
                <h1 className="flex items-center justify-between">
                    {folder.title}
                    <AiFillMinusCircle onClick={() => onDelete(folder.id)} style={{ color: "red"}} />
                </h1>
                </div> 
            :
                <Link href={`/folder/${folder.id}`}>
                    <a className="border-2 border-gray-600	border-solid rounded mt-1 h-16">
                        {folder.title}
                    </a>
                </Link> 
        }
        </>
    )
}

export default FolderItem