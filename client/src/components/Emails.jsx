import { useOutletContext, useParams } from "react-router-dom"
import useApi from "../hooks/useApi.js";
import { API_URLS } from "../services/api.urls.js";
import { useEffect, useState } from "react";
import { Box, Checkbox, List } from '@mui/material'
import { DeleteOutline } from '@mui/icons-material'
import Email from './Email.jsx'
import NoMails from "./NoMails.jsx";
import { EMPTY_TABS } from "../constants/constant.js";

const Emails = () => {

    const [selectedEmails, setselectedEmails] = useState([])
    const [refreshScreen, setRefreshScreen] = useState(false)

    const { openDrawer } = useOutletContext();

    const { type } = useParams()

    const getEmailsService = useApi(API_URLS.getEmailFromType)
    const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin)
    const deleteEmailService = useApi(API_URLS.deleteEmail)

    useEffect(() => {
        getEmailsService.call({}, type)
    }, [type, refreshScreen])

    const selectAllEmails = (e) => {
        if (e.target.checked) {
            const emails = getEmailsService?.response?.map((email) => email._id);
            if (emails) {
                setselectedEmails(emails);
            }
        } else {
            setselectedEmails([])
        }
    }

    const deleteSelectedEmails = (e) => {
        if (type === 'bin') {
            deleteEmailService.call(selectedEmails)
        } else {
            moveEmailsToBinService.call(selectedEmails)
        }
        setRefreshScreen(prevState => !prevState)
    }

    return (
        <Box style={openDrawer ? { marginLeft: 250, width: " calc(100% - 250)" } : { width: "100%" }}>
            <Box style={{ padding: "20px 10px 0 10px", display: 'flex', alignItems: "center" }}>
                <Checkbox size="small" onChange={(e) => selectAllEmails(e)} />
                <DeleteOutline size="small" onClick={(e) => deleteSelectedEmails(e)} />
            </Box>
            <List>
                {
                    Array.isArray(getEmailsService?.response) ? getEmailsService.response.map(email => (
                        <Email
                            key={email.id}
                            email={email}
                            selectedEmails={selectedEmails}
                            setRefreshScreen={setRefreshScreen}
                            setselectedEmails={setselectedEmails}
                        />
                    )) : null
                }
            </List>
            {
                getEmailsService?.response?.length === 0 &&
                <NoMails message={EMPTY_TABS[type]} />
            }
        </Box>
    )
}

export default Emails