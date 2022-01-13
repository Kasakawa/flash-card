import { useState } from "react"
import CardItem from "./CardItem"

type CardListProps = {
    cards: {
        id: number
        foldersId: number
        front: string
        back: string
        note: string
        memorized: boolean
        createdAt: string
        updatedAt: string
    }[]
    onDelete: (id: number) => void
    showEdit: boolean
    onInput: (id: number) => void
    onActive: (index: number) => void
    activeIndex: number
}

const CardList = ({ cards, onDelete, showEdit, onInput, onActive, activeIndex }: CardListProps) => {
    return(
        <div>
            {cards.map((card, i) => 
                <CardItem 
                    card={card} 
                    onDelete={onDelete} 
                    showEdit={showEdit} 
                    isActive={activeIndex === i} 
                    i={i} 
                    onActive={onActive} 
                    key={card.id} 
                    onInput={onInput}
                />)}
        </div>
    )
}

export default CardList