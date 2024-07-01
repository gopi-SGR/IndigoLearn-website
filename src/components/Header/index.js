import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import Popup from 'reactjs-popup'

import {
  HeaderContainer,
  NavContainer,
  WebsiteLogoContainer,
  NavLinksContainer,
  NavLinkItem,
  WebsiteText,
  LogoutOrSingupButton,
  MenuInSmallDevices,
  LogoutOrSingupButtonInSmall,
  MenuContainer,
  TriggerButton,
} from './styledComponents'

import './index.css'

const Header = () => (
  <HeaderContainer>
    <NavContainer>
      <WebsiteLogoContainer>
        <NavLinkItem>
          <Link to="/" className="nav-link">
            <WebsiteText>IndigoLearn</WebsiteText>
          </Link>
        </NavLinkItem>
      </WebsiteLogoContainer>
      <NavLinksContainer>
        <NavLinkItem>
          <Link to="/why-choose-us" className="nav-link">
            Why Choose Us?
          </Link>
        </NavLinkItem>
        <NavLinkItem>
          <Link to="/learning-with-ACCA" className="nav-link">
            Learning with ACCA
          </Link>
        </NavLinkItem>
        <NavLinkItem>
          <Link to="/placement" className="nav-link">
            Placement
          </Link>
        </NavLinkItem>
        <NavLinkItem>
          <Link to="/journey" className="nav-link">
            Start Journey with Indigo
          </Link>
        </NavLinkItem>
      </NavLinksContainer>
      <LogoutOrSingupButton>Login-in / Sign-up</LogoutOrSingupButton>
      <MenuInSmallDevices>
        <Popup
          trigger={
            <TriggerButton type="button">
              <GiHamburgerMenu size={18} color="#ffffff" />
            </TriggerButton>
          }
          position="bottom center"
        >
          {close => (
            <MenuContainer>
              <NavLinkItem>
                <Link to="/why-choose-us" className="nav-link ">
                  Why Choose Us?
                </Link>
              </NavLinkItem>
              <NavLinkItem>
                <Link to="/learning-with-ACCA" className="nav-link ">
                  Learning with ACCA
                </Link>
              </NavLinkItem>
              <NavLinkItem>
                <Link to="/placement" className="nav-link ">
                  Placement
                </Link>
              </NavLinkItem>
              <NavLinkItem>
                <Link to="/journey" className="nav-link ">
                  Start Journey with Indigo
                </Link>
              </NavLinkItem>
              <TriggerButton onClick={() => close()}>@</TriggerButton>
            </MenuContainer>
          )}
        </Popup>

        <LogoutOrSingupButtonInSmall>
          Login-in / Sign-up
        </LogoutOrSingupButtonInSmall>
      </MenuInSmallDevices>
    </NavContainer>
  </HeaderContainer>
)

export default Header
