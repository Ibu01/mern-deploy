import React from 'react';
import { AppBar, Toolbar, InputBase, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import styled from '@emotion/styled';
import { gmailLogo } from '../constants/constant'
import { blue } from '@mui/material/colors';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


const StyledAppBar = styled(AppBar)({
    background: "#f5f5f5",
    boxShadow: "none"
})

const SearchWrapper = styled(Box)({
    background: "#eaf1fb",
    marginLeft: 80,
    borderRadius: 40,
    height: 48,
    minWidth: 690,
    maxWidth: 720,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    '&>div': {
        width: "100%",
        padding: "0 10px"
    }
})


const Optionswrapper = styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "end",
    '&>svg': {
        marginLeft: 20,
    }
})

const Header = ({ toggleDrawer }) => {
    return (
        <StyledAppBar position="static">
            <Toolbar>
                <MenuIcon color='action' onClick={toggleDrawer} />
                <img color='action' src={gmailLogo} alt="logo" style={{ width: 110, marginLeft: 15, color: blue }} />
                <SearchWrapper>
                    <SearchIcon color='action' />
                    <InputBase placeholder='Search mail' />
                    <TuneIcon color='action' />
                </SearchWrapper>
                <Optionswrapper >
                    <HelpOutlineOutlinedIcon color='action' />
                    <SettingsOutlinedIcon color='action' />
                    <AppsIcon color='action' />
                    <AccountCircleOutlinedIcon color='action' />
                </Optionswrapper >
            </Toolbar>
        </StyledAppBar>
    );
};

export default Header;