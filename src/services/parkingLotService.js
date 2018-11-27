const axios = require('axios');
const { stringify } = require('flatted');

export const fetchParkigsInDistanceRadiusFromPosition = (lat, lon, dist) => {
    return new Promise(function(resolve, reject) {

        const config = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json'
            }
        };

        const baseUrl = 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=parkering_new&facet=plats&facet=status&geofilter.distance=';
        axios.get(`${baseUrl}${lat}%2C+${lon}%2C+${dist}`, config)
            .then(result => {
                console.log(result)
                resolve(result.data.records);
            })
            .catch(error => {
                console.log(error)
                reject(error);
            })
    })
};
