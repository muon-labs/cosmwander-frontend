import React, { Component } from 'react';
import {
    makeStyles
} from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles({
    root: {
    }
})

const ContractsDisplay = (props) => {
    const classes = useStyles();

    return <div className={classes.root}>

    </div>
}

export default ContractsDisplay