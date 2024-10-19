export const createCategoryRequest = async (category) =>{

    const formData = new FormData();
    formData.append('name',category.name);
    formData.append('frontImage',category.frontImage);


    return await fetch('/api/category/CreateCategory', {
    method: 'POST',
    
    body: formData
}).then(res => res.json())
}

export const createSubCategoryRequest = async (category) =>{
    
    return await fetch('/api/category/CreateSubCategory', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(category)
    }).then(res => res.json())
        
}



