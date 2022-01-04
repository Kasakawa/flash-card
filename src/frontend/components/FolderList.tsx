import FolderItem from "./FolderItem"

type FolderListProps = {
    folders: {
        id: number
        title: string
        // created_at: string
        // updated_at: string
    }[]
    showEdit: boolean
    onDelete: (id: number) => void
    onToggle: () => void
}

const FolderList = ({ folders, showEdit, onDelete, onToggle }: FolderListProps) => {
    return (
        <div className="flex flex-col">
            {folders.map((folder) => (
                <FolderItem 
                    folder={folder} 
                    showEdit={showEdit} 
                    onDelete={onDelete} 
                    onToggle={onToggle} 
                    key={folder.id} 
                />
              ))}
        </div>
    )
}

export default FolderList