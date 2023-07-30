import PhotoIcon from '@mui/icons-material/Photo';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


export const SIDEBAR_DATA = [
    {
        name: "inbox",
        title: "Inbox",
        icon: PhotoIcon
    },
    {
        name: "starred",
        title: "Starred",
        icon: StarBorderOutlinedIcon
    },
    {
        name: "snoozed",
        title: "Snoozed",
        icon: AccessTimeOutlinedIcon
    },
    {
        name: "sent",
        title: "Sent",
        icon: SendOutlinedIcon
    },
    {
        name: "drafts",
        title: "Drafts",
        icon: InsertDriveFileOutlinedIcon
    },
    {
        name: "bin",
        title: "Bin",
        icon: DeleteOutlinedIcon
    },
    {
        name: "allmail",
        title: "All Mail",
        icon: EmailOutlinedIcon
    },
]