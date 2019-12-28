import React from "react";
import Typography from "@material-ui/core/Typography";
import WbSunnyTwoToneIcon from '@material-ui/icons/WbSunnyTwoTone';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {makeStyles} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({

    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Title = () => {
    const classes = useStyles();

    return (
            <AppBar position="block" alignItems="center">
                <Toolbar>
                    <Typography className={classes.title} variant="h3" >
                        <Hidden smDown><WbSunnyTwoToneIcon fontSize="large"/></Hidden>
                        Weather
                        <Hidden smDown><WbSunnyTwoToneIcon fontSize="large"/></Hidden>
                    </Typography>
                    <Typography>with &hearts; by Netanella</Typography>
                </Toolbar>
            </AppBar>
    );
};

export default Title;

