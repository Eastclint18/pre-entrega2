const products = [
          {
                    id:'1',
                    name: 'Gtx 3060',
                    price : '1000',
                    category: 'GPU',
                    img : 'https://www.venex.com.ar/products_images/1675347137_imagen.png',
                    stock : 4, 
                    description : 'Gtx 3060 bang for the buck',
          },
          {
          id :'2',
          name:'GTX 4080' ,
          price : 4000,
          category: 'GPU',
          img : 'https://www.custompc.com/wp-content/sites/custompc/2023/03/nvidia-geforce-rtx-4080-review-01.jpg',
          stock : 5, 
          description : 'Best gpu in the market'
          },{
          id:  '3',
          name : 'i7 13700k',
          price : 2000,
          category: 'procesadores',
          img  : 'https://cdn11.bigcommerce.com/s-sp9oc95xrw/images/stencil/1280x1280/products/13820/61289/61C-2du0SqS._AC_SL1500___93534.1686301818.jpg?c=2',
          stock : 30 , 
          description : 'Best CPU in the market'
           
}



]
 export const getProducts = () => {
          return new Promise((resolve)=>{
                    setTimeout(() =>{
                              resolve(products)
                    },500)
          })
};



export const getProductById = (productId) => {
          return new Promise((resolve)=>{
                    setTimeout(() =>{
                              resolve(products.find(prod => prod.id === productId))
                    },600)
          })

          
}


export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}




