/**
 * Created by mrcode on 16-6-22.
 */

let [alt, LocationsAction] = [require('../alt'),require('../actions/LocationsAction')]

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
}

module.exports = alt.createStore(LocationsStore, 'LocationsStore');