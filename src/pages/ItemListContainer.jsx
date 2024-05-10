import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer'
import { getProductDetail} from '../utils'

function ItemListContainer() {
  const [item, setItem] = useState({})
  const { id } = useParams()


  useEffect(() => {
    getProductDetail(id)
      .then((res) => {
        setItem(res)
      })
      console.log(item)
      
  }, [id]);

  return (
    <div>
      <ItemDetailContainer key={item.id} item={item} />
    </div>
  )
}

export default ItemListContainer


/* const fetchData = async () => {
     try {
       const characterRef = collection(db, 'character');
       const querySnapshot = await getDocs(characterRef);
       querySnapshot.forEach((doc) => {
         if (doc.id === id) {
           setItem(doc.data())
         }
       });
     } catch (error) {
       console.error('Error fetching item:', error);
     }
   };

   fetchData(); */

   /*  fetch("https://rickandmortyapi.com/api/character/" + id)
      .then(res => res.json())
      .then((itemData) => {
        setItem(itemData)
      })
      .catch(error => console.error('Error fetching item:', error)); */