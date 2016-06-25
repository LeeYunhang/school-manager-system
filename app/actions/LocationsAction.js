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
        return dispatch => {
            dispatch();      // dispatch fetching action

            // fetch the data from LocationSource
            LocationSource.fetch()
                .then((locations) => {      //fetch data successfully
                    this.updateLocations(locations);
                })
                .catch((errorMessage) => {  //failed
                    this.locationsFailed(errorMessage);
                });
        };
    }

    locationsFailed(errorMessage) {
        return errorMessage;
    }
}

module.exports = alt.createActions(LocationsAction)