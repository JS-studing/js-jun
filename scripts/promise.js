// //++Method 1: callback functions
// console.log("Requesting data....")

// //Simulating configurating data response
// setTimeout(()=> {
//     console.log("Preparing data...")

//     const responsedData = {
//         server : "myServer",
//         port : 5678,
//         status : "working"
//     }

//     //Simulating receiving response
//     setTimeout(function() {
//         responsedData.modified = true
//         console.group("Received data:")
//         console.log(responsedData)
//         console.groupEnd()
//     }, 2000)
// }, 2000)
// //--Method 1

// //++Method 2: Promise
// console.log("Requesting data...")

// const prepareDataPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Preparing data...")

//         const responsedData = {
//             server : "myServer",
//             port : 5678,
//             status : "working"
//         }
//         //Marking async code status: resolve = success, reject = failed
//         //Return, where is marked
//         resolve(["Congigured data", responsedData])
//         reject("Configuring data error!")
//     }, 2000)
// })

// prepareDataPromise
//     .then(preparedData => 
//     {
//         console.group("Prepared data:")
//         console.log(preparedData[0])
//         console.log(preparedData[1])
//         console.groupEnd()

//         return new Promise((resolve, reject) => {
//             setTimeout(()=>{
//                 preparedData[1].modified = true
//                 resolve(preparedData[1])
//                 reject("Data is not prepared!")
//             },2000)
//         })    
//     })
//     .then((receivedData)=>{
//         console.group("Received data:")
//         console.log(receivedData)
//         console.groupEnd()
//         receivedData.clientGot = true
//         return receivedData
//     })
//     .then(clientData => {
//         console.group("Cliend data:")
//         console.log(clientData)
//         console.groupEnd()
//     })
//     .catch(err => console.log(`Error: ${err}`))
//     .finally(() => console.log("Finally!"))
// //--Method 2


const sleep = function(secDelay, preAction){
    actionNumber = preAction()
    return new Promise(
        resolve => {
            setTimeout(() => resolve({actionNum :actionNumber , delay: secDelay}), secDelay*1000)
        }
    )
}

const preAction = function(number){
    return function(){
        console.log(`Action ${number} started!`)
        return number    
    }
}

const messDelay = messArgs => console.log(`Action #${messArgs.actionNum} is completed after ${messArgs.delay} seconds delay!`)

// sleep(5, preAction(1)).then(secDelay => messDelay(secDelay))
// sleep(2, preAction(2)).then(secDelay => messDelay(secDelay))

//Waiting all and callback
Promise.all([
    sleep(5, preAction(1)),
    sleep(2, preAction(2)),
    sleep(3, preAction(3))
]).then(callbackArgs => callbackArgs.forEach(messArg => messDelay(messArg)))

//Catching fist completed
Promise.race([
    sleep(5, preAction(4)),
    sleep(2, preAction(5)),
    sleep(3, preAction(6))
]).then(callbackArg => messDelay(callbackArg))