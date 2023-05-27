// add(1, 4, () => {} )

const add = (a, b, callback) => {
    setTimeout( ()=>{
        a = a+b
        callback(a)
    }, 3000)
}

add(1, 4, (sum) => {
    console.log(sum)
} ) 