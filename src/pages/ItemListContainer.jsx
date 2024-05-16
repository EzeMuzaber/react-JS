import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer'
import { getProductDetail} from '../components/firebase/utils'

function ItemListContainer() {
  const [item, setItem] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getProductDetail(id)
      .then((res) => {
        setItem(res)
      })
      
  }, [id]);

  return (
    <div>
      <ItemDetailContainer key={item.id} item={item} />
    </div>
  )
}

export default ItemListContainer