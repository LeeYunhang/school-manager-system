/**
 * Created by mrcode on 16-6-22.
 */

let alt = require('../alt'),
    LocationsAction = require('../actions/getUserAction');
class LocationsStore {
    constructor() {
        this.locations = [];

        this.bindListeners({
            handleUpdateLocations: LocationsAction.UPDATE_LOCATIONS,
            handleFetchLocations: LocationsAction.FETCH_LOCATIONS,
            handleLocationsFailed: LocationsAction.LOCATIONS_FAILED
        });
    }

    handleUpdateLocations(locations) {
        this.locations = locations;
    }

    handleFetchLocations() {
        this.locations = [];
    }

    handleLocationsFailed(errorMessage) {
        this.errorMessage = errorMessage;
    }
}
module.exports = alt.createStore(LocationsStore, 'LocationsStore');