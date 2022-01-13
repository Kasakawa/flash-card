import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useEffect, useState } from "react"
import AddCardForm from "../../../components/AddCardForm"
import CardList from "../../../components/CardList"
import CreateButton from "../../../components/CreateButton"
import EditButton from "../../../components/EditButton"
import EditCardForm from "../../../components/EditCardForm"
import { server } from "../../../config"

type Props = {
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
    folderId: number
}

const Folder: NextPage<Props> = (props) => {

    const [cards, setCards] = useState(props.cards)

    // ページごとのid
    const folderId: number = props.folderId
    
    useEffect(() => {
        const getCards = async () => {
            const cardsFromServer = await fetchCards(folderId)
            setCards(cardsFromServer)
        }

        getCards()
    }, [cards])

    // fetch cards
    const fetchCards = async (folderId: number) => {
        const stringFolderId = folderId.toString()
        const res = await fetch(`${server}/api/v1/folders/${stringFolderId}/cards`)
        const data = await res.json()

        return data
    }

    // id指定でカードを取得
    const fetchCard = async (cardId: number) => {
        const stringCardId = cardId.toString()
        
        const res = await fetch(`${server}/api/v1/cards/${stringCardId}`)
        const data = await res.json()

        return data
    }
    
    // 追加フォームのトグル切り替え
    const [showAddForm, setShowAddForm] = useState(false)
    const toggleAddForm = () => {
        setShowAddForm(!showAddForm)
    }

    // 編集アクションのトグル関数
    const [showEdit, setShowEdit] = useState(false)
    const toggleEdit = () => {
        setShowEdit(!showEdit)
        onActive(-1)
    }

    // カード編集フォームのトグル関数
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const toggleEditForm = () => {
        setShowUpdateForm(!showUpdateForm)
    }

    // カードの裏表切り替え
    const [activeIndex, setActiveIndex] = useState(-1)
    const onActive = (index: number) => {
        // 編集中は切り替えられないようにする
        if (showEdit) return

        setActiveIndex(index)

        // 同じ所を押したら表に戻る
        if (activeIndex === index) {
            setActiveIndex(-1)
        }
    }

    // カードの追加
    const addCard = async (card: {front: string, back: string, note: string}) => {
        const newCard = {...card, foldersId: folderId}
        
        const res = await fetch(`${server}/api/v1/cards`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCard)
        })

        const data = await res.json()
        
        setCards([...cards, data])
    }

    // カードの更新に必要なデータ
    const [front, setFront] = useState('')
    const changeFront = (front: string) => {
        setFront(front)
    }
    const [back, setBack] = useState('')
    const changeBack = (back: string) => {
        setBack(back)
    }
    const [note, setNote] = useState('')
    const changeNote = (note: string) => {
        setNote(note)
    }

    const [cardId, setCardId] = useState(0)
    const changeCardId = (cardId: number) => {
        setCardId(cardId)
    }

    // フォームに文字を挿入
    const inputExistingValue = async (id: number) => {
        const card = await fetchCard(id)
        changeFront(card.front)
        changeBack(card.back)
        changeNote(card.note)

        changeCardId(card.id)

        toggleEditForm()
    }
    
    // カードの更新
    const updateCard = async (cardId: number) => {
        const card = fetchCard(cardId)
        const newCard = {...card, front: front, back: back, note: note}

        console.log(newCard)
        
        const stringCardId: string = cardId.toString()
        
        const res = await fetch(`${server}/api/v1/cards/${stringCardId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCard)
        })

        const data = await res.json()

        setCards(
            cards.map((card) => 
                card.id === cardId ? {...card, front: data.front, back: data.back, note: data.back} : card
            )
        )
    }

    // カードの削除
    const deleteCard = async (cardId: number) => {
        const stringCardId: string = cardId.toString()
        
        const res = await fetch(`${server}/api/v1/cards/${stringCardId}`, {
            method: 'DELETE'
        })

        res.status === 200
            ? setCards(cards.filter((card) => card.id !== cardId))
            : alert('カードの削除中にエラーが発生しました')
    }
    
    return (
        <div className="w-[min(100vw,1000px)] m-auto min-h-screen">
            {cards.length > 0 ?
                <CardList 
                    cards={cards} 
                    onDelete={deleteCard} 
                    showEdit={showEdit} 
                    onInput={inputExistingValue}
                    onActive={onActive}
                    activeIndex={activeIndex}
                />
            : <h1 className="text-center mt-20">Newボタンを押して新規作成しよう</h1>}
            {!showEdit && <CreateButton onToggle={toggleAddForm} />}
            <EditButton onToggle={toggleEdit} showEdit={showEdit} />
            {showAddForm && <AddCardForm onToggle={toggleAddForm} onAdd={addCard} folderId={folderId} />}
            {showUpdateForm && <EditCardForm 
                front={front} 
                back={back} 
                note={note} 
                cardId={cardId}
                folderId={folderId}
                changeFront={changeFront}
                changeBack={changeBack}
                changeNote={changeNote}
                onToggle={toggleEditForm} 
                onUpdate={updateCard}
            />}
        </div>
    )
}

export default Folder

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params!.id
    
    const res = await fetch(`${server}/api/v1/folders/${id}/cards`)
    const cards = await res.json()

    const folderRes = await fetch(`${server}/api/v1/folders/${id}`)
    const folder = await folderRes.json()
    const folderId = folder.id

    return {
        props: {
            cards,
            folderId
        }
    }
}

type folder = {
    id: number
    title: string
    createdAt: string
    updatedAt: string
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${server}/api/v1/folders`)
    const folders = await res.json()

    const ids = folders.map((folder: folder) => folder.id)
    const paths = ids.map((id: number) => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}