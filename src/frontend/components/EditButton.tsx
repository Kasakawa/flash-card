type EditButtonProps = {
    onToggle: () => void
    showEdit: boolean
}

const EditButton = ( {onToggle, showEdit}: EditButtonProps ) => {
    return (
        <div onClick={onToggle} className="fixed bottom-1 left-3 bg-white cursor-pointer">
            {showEdit ? "完了" : "編集"}
        </div>
    )
}

export default EditButton