//synced
console.log("start!")
console.log("start2!")

//window.setTimeout (only in webbrawser)
setTimeout(function(){
    console.log("Inside timeout: after 2 seconds")
}, 2000)

const myTimeout = function(secDelay){
    return function(delayedText){
        setTimeout(function(){
            console.log(`Delayed text [${delayedText}] after ${secDelay} seconds!`)
        }, secDelay*1000)
    }
}