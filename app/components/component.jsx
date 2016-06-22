import React from 'react';
import MuiThemeProvider from '../../node_modules/material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from '../../node_modules/material-ui/svg-icons/content/add';

const style = {
    marginRight: 20,
};

const FloatingActionButtonExampleSimple = () => (
    <MuiThemeProvider>
        <FloatingActionButton style={style}>
            <ContentAdd />
        </FloatingActionButton>
    </MuiThemeProvider>
);

export default FloatingActionButtonExampleSimple;