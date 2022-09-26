async function getRandomUsers() {
 
    const baseUrl = 'https://randomuser.me/api/';
    const numberUsers = 9;
    const url = `${baseUrl}/?results=${numberUsers}`

    return await fetch(url)
    .then((response) => response.json())
    .then((data) => data.results)
} 
    
export { getRandomUsers };