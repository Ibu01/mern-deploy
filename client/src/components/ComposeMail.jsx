import { Dialog, Box, Typography, InputBase, TextField, Button } from '@mui/material'
import { Close, CloseFullscreen, DeleteOutline, MinimizeOutlined } from '@mui/icons-material'
import styled from '@emotion/styled'
import { useState } from 'react'
import useApi from '../hooks/useApi'
import { API_URLS } from '../services/api.urls'


const dialogStyle = {
    height: "90%",
    width: "78%",
    maxHeight: "100%",
    maxWidth: "100%",
    boxShadow: "none",
    borderRadius: "10px 10px 0 0"
}

const Header = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 15px",
    background: "#f2f6fc",
    '&>p': {
        fontSize: 14,
        fontWeight: 500
    },
})

const RecipientWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    padding: "0 15px",
    '&>div': {
        fontSize: 14,
        borderBottom: "1px solid #f5f5f5",
        marginTop: 10
    }
})


const BorderlessTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: 'none',
        },
        '&:hover fieldset': {
            border: 'none',
        },
        '&.Mui-focused fieldset': {
            border: 'none',
        },
    },
});


const Footer = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 15px"
})

const SendButton = styled(Button)({
    background: "#0B57D0",
    color: "#FFF",
    fontWeight: "500",
    textTransform: "none",
    borderRadius: "18px",
    width: "100px",
    '&:hover': {
        background: "blue"
    }
})


const ComposeMail = ({ openDialog, setOpenDialog }) => {

    const [data, setData] = useState({})
    const sentEmailService = useApi(API_URLS.saveSentEmail)
    const saveDraftService = useApi(API_URLS.saveDraftEmails)

    const config = {
        Host: "smtp.elasticemail.com",
        Username: "ibu@yopmail.com",
        Password: "96DFC3F98207B8A099C4C32AD73029A20741",
        Port: 2525,
    }

    const closeComposeMail = (e) => {
        e.preventDefault()
        const payLoad = {
            to: data.to,
            from: "ibrahimhossain3134@gmail.com",
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: '',
            name: "Md Ibrahim Hossain",
            starred: false,
            type: 'drafts',
        }

        saveDraftService.call(payLoad)

        if (!saveDraftService.error) {
            setOpenDialog(false)
            setData({})
        } else {

        }
    }

    const sendMail = (e) => {
        e.preventDefault()

        if (window.Email) {
            window.Email.send({
                ...config,
                To: data.to,
                From: "ibrahimhossain3134@gmail.com",
                Subject: data.subject,
                Body: data.body
            }).then(
                message => alert(message)
            );
        }

        const payLoad = {
            to: data.to,
            from: "ibrahimhossain3134@gmail.com",
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: '',
            name: "Md Ibrahim Hossain",
            starred: false,
            type: 'sent',
        }

        sentEmailService.call(payLoad)

        if (!sentEmailService.error) {
            setOpenDialog(false)
            setData({})
        } else {

        }

        setOpenDialog(false)
    }

    const onValueChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }


    return (
        <Dialog
            open={openDialog}
            PaperProps={{ sx: dialogStyle }}
        >
            <Header>
                <Typography>New Message</Typography>
                <Box>
                    <Close fontSize='small' onClick={(e) => closeComposeMail(e)} />
                    <CloseFullscreen fontSize='small' />
                    <MinimizeOutlined fontSize='small' />
                </Box>
            </Header>

            <RecipientWrapper>
                <InputBase placeholder='Recipient' name='to' onChange={(e) => onValueChange(e)} />
                <InputBase placeholder='Subject' name='subject' onChange={(e) => onValueChange(e)} />
            </RecipientWrapper>

            <BorderlessTextField
                multiline
                rows="16"
                onChange={(e) => onValueChange(e)}
                name='body'
            />

            <Footer>
                <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
                <DeleteOutline onClick={() => setOpenDialog(false)} />
            </Footer>

        </Dialog>
    )
}

export default ComposeMail