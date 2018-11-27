'use strict';
const parkingService = require('../../services/parkingLotService');
const parkingMapper = require('../../mappers/parkingLot');

module.exports = {
    parkingLots: parkingLots
};

function parkingLots(req, res) {
    // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
    const lat = req.swagger.params.lat.value || '0';
    const lon = req.swagger.params.lon.value || '0';
    const dist = req.swagger.params.dist.value || '0';

    parkingService.fetchParkigsInDistanceRadiusFromPosition(lat, lon, dist)
        .then(result => res.json(parkingMapper.mapToPlainJSON(result)))
        .catch(err => console.log(err))
}
