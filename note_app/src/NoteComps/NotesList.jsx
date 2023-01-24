import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContextProvider';
import Note from './Note';

export default function NotesList() {
    const { notes } = useContext(ShopContext)
  let NotesToDisplay = notes.map(note => <Note key={note.id} id={ note.id} title={note.title} desc={note.desc} />)
 
    return (<div>{ NotesToDisplay}</div>
  )
}
