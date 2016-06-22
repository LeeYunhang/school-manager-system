/**
 * Created by mrcode on 16-6-22.
 */
var React = require('react');
var LocationStore = require('../stores/LocationStore');
var LocationsAction = require('../actions/LocationsAction');

var Locations = React.createClass({
    getInitialState() {
        return LocationStore.getState();
    },

    componentDidMount() {
        LocationStore.listen(this.onChange);
        LocationsAction.fetchLocations();
    },

    componentWillUnmount() {
        LocationStore.unlisten(this.onChange);
    },

    onChange(state) {
        this.setState(state);
    },

    render() {
        return (
            <ul>
                {this.state.locations.map((location) => {
                    return (
                        <li>{location.name}</li>
                    );
                })}
            </ul>
        );
    }
});

module.exports = Locations;