export const createProductRequest = async (product) => {

    const formData = new FormData();
    // console.log("Product Data")
    // console.log(product)

    formData.append('name', product.name);
    formData.append('description', product.description);
    
    formData.append('price', product.price);
    
    
    formData.append('frontImage', product.frontImage[0]);

    product.image.forEach((element , index) => {
        
        formData.append(`images`, element);
        
    });
    product.categoryList.forEach((element , index) => {
        
        formData.append(`categoryList`, element);
        
    });

    


    console.log(formData)
    return await fetch('http://localhost:5000/api/product/CreateProduct', {
        method: 'POST',
        body: formData
    }).then(res => res.json())
}