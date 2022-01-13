import FolderItem from "./FolderItem"

type folder = {
    id: number
    title: string
    created_at: string
    updated_at: string
}

type FolderListProps = {
    folders: {
        id: number
        title: string
        created_at: string
        updated_at: string
    }[]
    showEdit: boolean
    onDelete: (id: number) => void
    onToggle: () => void
    changeTitle: (titile: string) => void
    changeId: (id: number) => void
    fetchFolder: (id: number) => Promise<folder>
}

const FolderList = ({ folders, showEdit, onDelete, onToggle, changeTitle, changeId, fetchFolder }: FolderListProps) => {
    return (
        <div className="flex flex-col mt-2 m-1">
            {folders.map((folder) => (
                <FolderItem 
                    folder={folder} 
                    showEdit={showEdit} 
                    onDelete={onDelete} 
                    onToggle={onToggle}
                    changeTitle={changeTitle} 
                    changeId={changeId}
                    fetchFolder={fetchFolder}
                    key={folder.id} 
                />
              ))}
        </div>
    )
}

export default FolderList