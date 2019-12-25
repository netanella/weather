import React from "react";
import { styled } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import WbSunnyTwoToneIcon from '@material-ui/icons/WbSunnyTwoTone';
import Grid from "@material-ui/core/Grid";

const Title = (props) => {
    return (
        <Container>
            <Typography variant="h2"> Weather <WbSunnyTwoToneIcon fontSize="large"/></Typography>
            <p>{props.errMess}</p>
            <Typography>by Netanella</Typography>
        </Container>
    );
};

export default Title;

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'row',
});

