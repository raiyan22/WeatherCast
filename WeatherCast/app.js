const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


// before
// geocode( 'Dhaka', (error, response) => {
//     console.log('Error ', error)
//     console.log('Data ', response)
// })


// forecast( 23.7104, 90.40744, (error, response)=> {
//         console.log('Error ', error)
//         console.log('Data ', response)
// })

// now
const inputAddress = process.argv[2]

if(!inputAddress) {
    console.log('Enter a valid location!')
} else {

    geocode(inputAddress, (error, geoCodeData) => {
        if (error) {
            return console.log(error) // stops async func
        }
        // console.log('Data ', geoCodeData)
        
        
        forecast(geoCodeData.lati, geoCodeData.longi, (error, forecastData) => {
            if (error) {
                return console.log('Error ', error)
            }
            console.log("Location: " + geoCodeData.name + ", " + geoCodeData.country)
            console.log('Data ', forecastData)
        })
    })
    
}
