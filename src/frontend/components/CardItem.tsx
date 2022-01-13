import { AiFillMinusCircle, AiFillRightCircle } from "react-icons/ai"

type CardItemProps = {
    card: {
        id: number
        foldersId: number
        front: string
        back: string
        note: string
        memorized: boolean
        createdAt: string
        updatedAt: string
    }
    onDelete: (id: number) => void
    showEdit: boolean
    onActive: (index: number) => void
    isActive: boolean
    i: number
    onInput: (id: number) => void
}

const CardItem = ({ 
    card, 
    onDelete, 
    showEdit, 
    onActive, 
    isActive, 
    i, 
    onInput
}: CardItemProps) => {
    return (
        <div onClick={() => onActive(i)} 
            className="border-b border-gray-400 min-h-[35px] flex items-center justify-between"
        >
            {isActive ?
                <div className="w-full p-1">
                    <p>{card.back}</p>
                    <p className="text-xs">メモ</p>
                    <div className="min-h-[50px] w-[99%] m-auto border border-gray-300 rounded">
                        <p className=" m-1 " >{card.note}</p>
                    </div>
                </div>
            :
            <p className="p-1 break-all">{card.front}</p>}
            {showEdit && 
                <div className="flex">
                    <AiFillRightCircle onClick={() => onInput(card.id)} className="mr-3 cursor-pointer" size={20} color="teal" />
                    <AiFillMinusCircle onClick={() => onDelete(card.id)} className="mr-3 cursor-pointer" size={20} color="red" />
                </div>}
        </div>
    )
}

export default CardItem