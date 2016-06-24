let React = require('react'),
    LocationStore = require('../stores/LocationsStore'),
    GetUserAction = require('../actions/getUserAction');

let contentStyle={
    textAlign: 'center',
}

Locations = React.createClass({
    getInitialState() {
        return LocationStore.getState();
    },

    /**
     * The method will be called when this component was rendered.
     * */
    componentDidMount() {
        LocationStore.listen(this.onChange);

        GetUserAction.fetchLocations();
    },

    componentWillUnmount() {
        LocationStore.unlisten(this.onChange);
    },

    onChange(state) {
        this.setState(state);
    },

    render() {
        return (
            <div style={contentStyle}>
                <ul>
                    {this.state.locations.map((location) => {
                        return (
                            <li>{location.name}</li>
                        );
                    })}
                </ul>
            </div>
        );
    }
});

module.exports = Locations;