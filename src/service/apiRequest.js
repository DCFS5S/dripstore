export const apiRequest = ({
    path,
    data,
    method = 'GET',
    headers = {},
}) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token') || '',
            'X-Guest-Token': localStorage.getItem('guestToken') || '',
            ...headers,
        },
        body: JSON.stringify(data)
    };
    
    return fetch(`http://localhost:3000${path}`, options)
}
