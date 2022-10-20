import {productsDetails} from './products.js'

/* Desde los conceptos adquiridos en Clase desarrolla las siguientes actividades teniendo en cuenta su contexto. usar el array de pruebas suministrado en la siguiente actividad */


// 1. Cree un nuevo array basado en products que solo tenga los nombres de los productos

const nombreProducts = productsDetails.map((Products) => {return Products.title});

console.log(nombreProducts);

// Cree una funcion para filtar los productos con descuentos mayores al 12%

const descuentoProducts = productsDetails.filter((discount) => {return discount.discountPercentage > 12.0 }); // Simplificado sin return y parentesis egipcios

console.log(descuentoProducts);

//3. Cree una funcion que retorne la cantidad de stock existente en los productos de la categoria smartphones

const stockProduct = productsDetails.filter(category =>  category.category === 'smartphones' ).reduce((cantidad, stock) =>  (cantidad + stock.stock),0); // Simplificado sin return y parentesis egipcios

console.log('Stock smartphones =',stockProduct );

//4. En un nuevo array cambie el nombre de la categoria fragrances por parfums

const changeProduct = productsDetails.filter(category => category.category === 'fragrances');

for (let i=0; i< changeProduct.length; i++){
    changeProduct[i].category ='parfums';
}

console.log(changeProduct);

// 5. Cree un nuevo array con los productos ordenados por precio

const orderProducts = productsDetails.sort((a,b)=>{
    if(a.price > b.price){
        return 1
    } if (a.price < b.price){
        return -1
    }
     return 0    
});
console.log(orderProducts);


