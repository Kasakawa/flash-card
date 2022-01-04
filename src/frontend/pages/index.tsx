import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import AddFolderForm from '../components/AddFolderForm'
import CreateButton from '../components/CreateButton'
import EditButton from '../components/EditButton'
import EditFolderForm from '../components/EditFolderForm'
import FoldersList from '../components/FolderList'
import {server} from '../config/index'

type Props = {
  folders: {
    id: number
    title: string
    // created_at: string
    // updated_at: string
  }[]
}

const Home: NextPage<Props> = (props) => {

  const [folders, setFolders] = useState(props.folders)
  
  // useEffect
  useEffect(() => {
    const getFolders = async () => {
      const foldersFromServer = await fetchFolders()
      setFolders(foldersFromServer)
    }

    getFolders()
  }, [])
  
  // フォルダ一覧取得
  const fetchFolders = async () => {
    const res = await fetch(`${server}/api/v1/folders`)
    const data = await res.json()

    return data
  }
  
  // フォルダの取得
  const fetchFolder = async (id: number) => {
    const res = await fetch(`${server}/api/v1/folders/${id}`)
    const data = await res.json()

    return data
  }
  
  // フォルダ追加フォームのトグル関数
  const [showAddFolder, setShowAddFolder] = useState(false)
  const toggleAddFolder = () => {
    setShowAddFolder(!showAddFolder)
  }

  // 編集アクションのトグル関数
  const [showEdit, setShowEdit] = useState(false)
  const toggleEdit = () => {
    setShowEdit(!showEdit)
  }

  // フォルダ編集フォームのトグル関数
  const [showUpdateFolder, setShowUpdateFolder] = useState(false)
  const toggleUpdateFolder = () => {
    setShowUpdateFolder(!showUpdateFolder)
  }

  // 
  const [title, setTitle] = useState('')


  // フォルダの追加
  const addFolder = async (folder: {title: string}) => {
    const res = await fetch(`${server}/api/v1/folders`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(folder)
    })

    const data = await res.json()

    setFolders([...folders, data])
  }

  // フォルダの更新
  const updateFolder = async (id) => {
    const updFolder = fetchFolder(id)
    
    const res = await fetch(`${server}/api/v1/folders/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updFolder)
    })

    const data = res.json()

    setFolders(
      folders.map((folder) => folder.id === id ? {...folder, title: data.title} : folder)
    )
  } 

  // フォルダの削除
  const deleteFolder = async (id: number) => {
    const res = await fetch(`${server}/api/v1/folders/${id}`, {
      method: 'DELETE'
    })

    res.status === 200 
      ? setFolders(folders.filter((folder) => folder.id !== id)) 
      : alert('フォルダの削除中にエラーが出ました')
  }
  
  return (
    <>
      <FoldersList folders={folders} showEdit={showEdit} onDelete={deleteFolder} onToggle={toggleUpdateFolder} />
      <CreateButton onToggle={toggleAddFolder} />
      <EditButton onToggle={toggleEdit} showEdit={showEdit} />
      {showAddFolder && <AddFolderForm onToggle={toggleAddFolder} onAdd={addFolder} />}
      {showUpdateFolder && <EditFolderForm onToggle={toggleUpdateFolder} />}
    </>
  )
}

export default Home

//  getStaticProps
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${server}/api/v1/folders`)
  const folders = await res.json()

  return {
    props: {
      folders,
    },
  }
}
