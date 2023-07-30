
import styled from '@emotion/styled';
import { CheckBox, Star, StarBorder } from '@mui/icons-material';
import { Box, Typography, Checkbox } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../routes/routes';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.urls';

const Wrapper = styled(Box)({
    padding: "0 0 0 10px",
    background: "#f2f6fc",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    '&>div': {
        display: "flex",
        width: "100%",
        '&>p': {
            fontSize: 14
        }
    },

})

const Indicator = styled(Typography)({
    fontSize: "12px !important",
    background: "#ddd",
    color: "#222",
    padding: "0px 4px",
    borderRadius: "4px",
    marginRight: "6px"
})

const Date = styled(Typography)({
    marginLeft: "auto",
    marginRight: 20
})

const Email = ({ email, selectedEmails, setRefreshScreen, setselectedEmails }) => {

    const navigate = useNavigate()

    const toggleStarredService = useApi(API_URLS.toggleStarredEmail)

    const toggleStarredMails = () => {
        toggleStarredService.call({ id: email._id, value: !email.starred })
        setRefreshScreen(preState => !preState)
    }

    const onValueChange = () => {
        if (selectedEmails.includes(email._id)) {
            setselectedEmails(preState => preState.filter(id => id != email._id))
        }
        else {
            setselectedEmails(preState => [...preState, email._id])
        }
    }

    return (
        <Wrapper>
            <Checkbox
                size='small'
                checked={selectedEmails?.includes(email._id)}
                onChange={() => onValueChange()}
            />
            {
                email.starred ?
                    <Star fontSize='small' style={{ marginRight: 10, color: "goldenrod" }} onClick={() => toggleStarredMails()} /> :
                    <StarBorder fontSize='small' style={{ marginRight: "10px" }} onClick={() => toggleStarredMails()} />
            }
            <Box onClick={() => navigate(routes.view.path, { state: { email: email } })}>
                <Typography style={{ width: 200, overflow: "hidden" }}>{email.name}</Typography>
                <Indicator> Inbox</Indicator>
                <Typography> {email.subject} {email.body && '-'} {email.body}</Typography>
                <Date>
                    {(new window.Date(email.date).getDate())}
                    {(new window.Date(email.date).toLocaleString('default', {
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                    }))}
                </Date>
            </Box>
        </Wrapper>
    );
};

export default Email;
