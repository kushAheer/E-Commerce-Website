export const getCategoryRequest = async () => {

    const response = await fetch('http://localhost:5000/api/category/GET', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    });

    return response.json();

}

export const getSubCategoryRequest = async (id) => {
    
    return await fetch(`http://localhost:5000/api/category/GETSUB/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'

    }).then(res => res.json());

    

}