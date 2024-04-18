import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer'

function ItemListContainer() {
  const { id } = useParams()
  const [item, setItem] = useState({})


  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/" + id)
      .then(res => res.json())
      .then((itemData) => {
        setItem(itemData)
      })
      .catch(error => console.error('Error fetching item:', error));
  },);
 
  return (
      <div>
        <ItemDetailContainer item={item} />
      </div>
  )
}

export default ItemListContainer 