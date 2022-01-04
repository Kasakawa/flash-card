interface createButtonProps {
    onToggle: () => void
}

const CreateButton = ( {onToggle}: createButtonProps ) => {
    return (
        <button className="text-2xl fixed bottom-3 right-3 border-2 border-black rounded-lg w-20 h-14 bg-white" onClick={onToggle}>
            New
        </button>
    )
}

export default CreateButton