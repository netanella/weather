import React from "react";
import { styled } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import WbSunnyTwoToneIcon from '@material-ui/icons/WbSunnyTwoTone';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({

    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Title = (props) => {
    const classes = useStyles();

    return (
            <AppBar position="block" alignItems="center">
                <Toolbar>
                    <Typography className={classes.title} variant="h3" ><WbSunnyTwoToneIcon fontSize="large"/> Weather <WbSunnyTwoToneIcon fontSize="large"/></Typography>
                    <Typography>by Netanella</Typography>
                </Toolbar>
            </AppBar>
    );
};

export default Title;

