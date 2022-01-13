import Link from "next/link"
import { AiFillMinusCircle, AiFillRightCircle } from "react-icons/ai"

type Folder = {
    id: number
    title: string
    created_at: string
    updated_at: string
}

type FolderItemProps = {
    folder: {
        id: number
        title: string
    }
    showEdit: boolean
    onDelete: (id: number) => void
    onToggle: () => void
    changeTitle: (title: string) => void
    changeId: (id: number) => void
    fetchFolder: (id: number) => Promise<Folder>
}

const FolderItem = ({ folder, showEdit, onDelete, onToggle, changeTitle, changeId, fetchFolder }: FolderItemProps) => {
    
    const inputTitle = async (id: number) => {
        onToggle()

        const folder = await fetchFolder(id)
        changeTitle(folder.title)
        changeId(folder.id)
    }

    return (
        <>
        {
            showEdit ? 
                <div className="border border-gray-300 border-solid rounded mt-1 h-16 flex items-center justify-between shadow-md">
                    <h1 className="m-3 text-xl">{folder.title}</h1>
                    <div className="flex ">
                        <AiFillRightCircle onClick={() => inputTitle(folder.id)} size={25} color="teal" className="mr-3 cursor-pointer" />
                        <AiFillMinusCircle onClick={() => onDelete(folder.id)} size={25} color="red" className="mr-3 cursor-pointer" />
                    </div>
                </div> 
            :
                <Link href={`/folder/${folder.id}`}>
                    <a className="border border-gray-300 border-solid rounded mt-1 h-16 shadow-md">
                        <h1 className="m-3 text-xl">{folder.title}</h1>
                    </a>
                </Link> 
        }
        </>
    )
}

export default FolderItem