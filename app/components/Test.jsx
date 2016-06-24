
let contentStyle={
    backgroundColor: 'yellow',
    width: '1000px',
    height: '400px',
    margin: '0 auto',
    padding: '0',
    overflow: 'hidden',
    textAlign: 'center',
}

let React = require('react'),
    LocationStore = require('../stores/LocationsStore'),
    GetUserAction = require('../actions/getUserAction');
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