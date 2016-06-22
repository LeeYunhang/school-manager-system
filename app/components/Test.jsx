/**
 * Created by mrcode on 16-6-22.
 */

let React = require('react'),
    LocationStore = require('../stores/LocationsStore'),
    LocationsAction = require('../actions/LocationsAction');
let Locations = React.createClass({
    getInitialState() {
        return LocationStore.getState();
    },

    /**
     * The method will be called when this component was rendered.
     * */
    componentDidMount() {
        //Tell localtionStore callback this.onChange when the state in store was changed.
        LocationStore.listen(this.onChange);

        //Fecth the data.
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