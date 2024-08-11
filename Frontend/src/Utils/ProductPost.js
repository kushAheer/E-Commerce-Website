export const createProductRequest = async (product) => {

    const formData = new FormData();
    // console.log("Product Data")
    // console.log(product)

    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('slug', product.slug);
    formData.append('price', product.price);
    formData.append('category_id', product.category_id);
    
    formData.append('frontImage', product.frontImage[0]);

    product.image.forEach((element , index) => {
        // console.log(`Appending image ${index}:`, element);
        formData.append(`images`, element);
        
    });
    

    for (let pair of formData.entries()) {
        console.log(pair[0] + ':', pair[1]);
    }


    console.log(formData)
    return await fetch('http://localhost:5000/api/product/CreateProduct', {
        method: 'POST',
        body: formData
    }).then(res => res.json())
}