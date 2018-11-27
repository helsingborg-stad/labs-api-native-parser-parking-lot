export const mapToPlainJSON = (records) => {
    let parkingLots = [];

    if (records) {
        for (let record of records) {
            parkingLots.push({
                name: record.fields.plats,
                lat: record.fields.geo_point_2d[0],
                lon: record.fields.geo_point_2d[1],
                dist: record.fields.dist
            })
        };
    }

    return parkingLots;
}