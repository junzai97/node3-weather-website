const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5798026f8534efea0718c208cd4330e0&query=' + lat + ',' + long

    request({url, json: true}, (err, {body}) => {
        if (err) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const current = body.current;
            const data = current.weather_descriptions[0] + '. It is currently ' + current.temperature + ' degrees out. It feels like ' + current.feelslike +' degrees out.'
            callback(undefined, data)
        }
    })
}

module.exports = forecast