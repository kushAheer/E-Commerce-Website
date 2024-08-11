export const createCategoryRequest = async (category) =>{
    return await fetch('http://localhost:5000/api/category/CreateCategory', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        
    },
    body: JSON.stringify(category)
}).then(res => res.json())
}

export const createSubCategoryRequest = async (category) =>{
    
    return await fetch('http://localhost:5000/api/category/CreateSubCategory', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(category)
    }).then(res => res.json())
        
}



