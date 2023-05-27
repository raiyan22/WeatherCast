const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=8688ce19575b1ffb5b18272cfe2b96fc&query=' + encodeURIComponent(address)

    request({url : url, json : true}, (error, response) => {
        if(error){
            callback('Unable to connect!!', undefined )
            // console.log('Unable to fetch! Connect to internet First')
        } 
        else if(response.body.error) {
            callback('Unable to find location! Try another search', undefined )
            // console.log('Unable to find location!')
        }
        else {
            callback(undefined, {
                lati  : response.body.data[0].latitude,
                longi : response.body.data[0].longitude,
                name : response.body.data[0].name,
                country : response.body.data[0].country
            })
            // console.log('latitude is ' + lati + ' and longitude is ' + longi)
        }
        // const abc = 
        // console.log(abc)
    })
}

module.exports = geocode