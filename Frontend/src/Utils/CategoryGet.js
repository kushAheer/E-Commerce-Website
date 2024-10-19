export const getCategoryRequest = async () => {

    const response = await fetch('/api/category/GET', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    });

    return response.json();

}

export const getSubCategoryRequest = async (id) => {
    
    return await fetch(`/api/category/GETSUB/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'

    }).then(res => res.json());

    

}