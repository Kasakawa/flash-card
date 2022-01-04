import { NextApiRequest, NextApiResponse } from "next";
import { cards } from "../../../../../../data";

export default function handler(
    {query: {id}}: NextApiRequest,
    res: NextApiResponse
) {
    const filtered = cards.filter((card) => card.folderId === id)

    if (filtered.length > 0) {
        res.status(200).json(filtered)
    } else {
        res.status(404).json({message: `folder with the id of ${id} is not found`})
    }
}