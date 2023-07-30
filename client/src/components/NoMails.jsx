import styled from '@emotion/styled';
import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

const Component = styled(Box)({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "50px",
    opacity: ".8",
    width: "100%"
})

const StyledDivider = styled(Divider)({
    width: "100%",
    marginTop: 10,
})

const NoMails = ({ message }) => {
    return (
        <Component>
            <Typography>{message.heading}</Typography>
            <Typography>{message.subHeading}</Typography>
            <StyledDivider />
        </Component>
    );
};

export default NoMails;