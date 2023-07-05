import './ItemDetailContainer.css'
import {useState,UseEffect} from 'react' 
import {getProductById} from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail' 


import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    UseEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer







/* const ItemDetailContainer = () => {
          const [product,setProducts] =  useState(null)

          const {itemId} = useParams()

          useEffect(() => {
                    getProductById('1')
                        .then(response => {
                              setProducts(response)
                        })
                        .catch (error => {
                              console.error(error)
                        })
          })
          }, [ItemId]);

          return (
                    <div className = 'ItemDetailContainer' >
                              <ItemDetail {...product} />
                    </div>
          ) */