const delay = (ms) => new Promise(
    resolve => setTimeout(() => resolve(), ms)
)

testUrl = "https://jsonplaceholder.typicode.com/todos/1"

// // Method 1
// function fetchTodos(url){
//     console.log("Fetch todo started")
//     return delay(2000)
//     .then(()=> {
//         console.log("URL: ", url)
//         return fetch(url)
//      })
//     .then(response => response.json())
// }

// fetchTodos(testUrl)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))


// // Method 2
async function fetchAsyncTodos(url){
    try{
        console.log("Fetch todo started")
        await delay(2000)
        console.log("URL: ", url)
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }
    catch (err){
        console.error(err)
    }
    finally{
        console.log("Finally!")
    }
}

fetchAsyncTodos(testUrl)