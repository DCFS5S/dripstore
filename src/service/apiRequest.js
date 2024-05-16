export const apiRequest = ({
    path,
    data,
    method = 'GET',
}) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token') || '',
        },
        body: JSON.stringify(data)
    };
    
    return fetch(`http://localhost:3000${path}`, options)
}