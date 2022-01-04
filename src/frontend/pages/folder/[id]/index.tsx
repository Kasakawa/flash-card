import { server } from "../../../config"

const Folder = ({cards}) => {
    return (
        <>
        <div>{cards.map((card) => (
            <h3>{card.front}</h3>
        ))}</div>
        </>
    )
}

export default Folder

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/folders/${context.params.id}/cards`)
    const cards = await res.json()

    return {
        props: {
            cards
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/folders`)
    const folders = await res.json()

    const ids = folders.map((folder) => folder.id)
    const paths = ids.map((id) => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}