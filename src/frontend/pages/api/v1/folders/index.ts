import { NextApiRequest, NextApiResponse } from 'next'
// import {folders} from '../../../../data'

type Data = {
    id: string
    title: string
}[]

export default function handler(
    req: NextApiRequest, 
    res: NextApiResponse<Data>
) {
    res.status(200).json(folders)
}