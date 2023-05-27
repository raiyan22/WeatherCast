const request = require('request')

const forecast = (lati, longi, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=0bdb65c6327e6422eb8d865fcd8a7106&query=" + lati +","+ longi

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
                weatherInWords : response.body.current.weather_descriptions[0],
                feelslike : response.body.current.feelslike,
                temp : response.body.current.temperature
            })
            // console.log('latitude is ' + lati + ' and longitude is ' + longi)
        }
        // const abc = 
        // console.log(abc)
    })
}

module.exports = forecast