/**
 * Created by mrcode on 16-6-22.
 */
let alt = require('../alt'),
    LocationSource = require('../sources/LocationSource');

class LocationsAction{
    updateLocations(locations) {
        return locations;
    }

    fetchLocations() {
        return (dispatch) => {
            dispatch();
            LocationSource.fetch()
                .then((locations) => {
                    this.updateLocations(locations);
                })
                .catch((errorMessage) => {
                    this.locationsFailed(errorMessage);
                });
        }
    }
    locationsFailed(errorMessage) {
        return errorMessage;
    }
}

module.exports = alt.createActions(LocationsAction)