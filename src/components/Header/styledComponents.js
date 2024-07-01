import styled from 'styled-components'

export const HeaderContainer = styled.div`
background-color: #4f46e5;
width:100%;
height:8%;
`
export const NavContainer = styled.nav`
width:90%;
margin:auto;
display:flex;
align-items:center;
justify-content:space-between;

`
export const WebsiteLogoContainer = styled.div`
display:flex;
align-items:center;

`
export const NavLinksContainer = styled.ul`
list-style-type:none;
padding-left:0px;
display:flex;
align-items:center;
@media screen and (max-width:767px){
    display:none;
}

`
export const WebsiteText = styled.p`
color:white;
font-size:20px;
font-weight:600;
font-family:"Roboto";

`
export const NavLinkItem = styled.li`
margin-right:25px;
color:white;
font-size:20px;
list-style-type:none;
padding-left:0px;
font-family:"Roboto";
`
export const LogoutOrSingupButton = styled.button`
background-color:white;
color:#4f46e5;
font-size:18px;
font-family:"Roboto";
border:none;
cursor:pointer;
outline:none;
@media (max-width:767px){
    display:none;
}

`
export const LogoutOrSingupButtonInSmall = styled.button`
background-color:white;
color:#4f46e5;
font-size:18px;
font-family:"Roboto";
border:none;
cursor:pointer;
outline:none;
margin-left:20px;
`

export const MenuInSmallDevices = styled.div`
display:flex;
align-items:center;
@media screen and (min-width:768px){
    display:none;
}

`
export const MenuContainer = styled.div`
background-color:#000000;
display:flex;
flex-direction:column;
padding:10px;
border-top-left-radius:10px;
border-top-right-radius:10px;
margin:auto;
`
export const TriggerButton = styled.button`
border:none;
outline:none;
background-color:transparent;

`
