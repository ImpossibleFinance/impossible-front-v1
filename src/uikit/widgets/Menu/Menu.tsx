import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import throttle from 'lodash/throttle'
import { useLocation } from 'react-router'
import Overlay from '../../components/Overlay/Overlay'
import Flex from '../../components/Box/Flex'
import { useMatchBreakpoints } from '../../hooks'
import UserBlock from './components/UserBlock'
import { NavProps } from './types'
import Avatar from './components/Avatar'
import Nav from './Nav'
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from './config'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.03);
  z-index: 20;
  transform: translate3d(0, 0, 0);
  padding: 15px 120px;
`

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
  max-width: 100%;
`

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`

const ImpIcon = styled.div`
  display: flex;
  justify-content: center;
  img {
    height: 30px;
  }
`

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  margin-left: 56px;
`

const HeaderItemContainer = styled.div<{ isRight?: boolean }>`
  display: flex;
  flex: 1;
  justify-content: ${({ isRight }) => (isRight ? 'flex-end' : 'flex-start')}};
  align-items: center;
`

const Menu: React.FC<NavProps> = ({ account, login, logout, isDark, links, profile, children }) => {
  const { isXl } = useMatchBreakpoints()
  const isMobile = isXl === false
  const [showMenu, setShowMenu] = useState(true)
  const refPrevOffset = useRef(window.pageYOffset)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight
      const isTopOfPage = currentOffset === 0
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true)
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true)
        } else {
          // Has scroll down
          setShowMenu(false)
        }
      }
      refPrevOffset.current = currentOffset
    }
    const throttledHandleScroll = throttle(handleScroll, 200)

    window.addEventListener('scroll', throttledHandleScroll)
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [])

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === 'Home')
  const config = [
    { href: 'https://swap.impossible.finance/#/swap', label: 'Swap' },
    { href: 'https://swap.impossible.finance/#/pool', label: 'Liquidity' },
    { href: '/farms', label: 'Stake' },
  ]

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <HeaderItemContainer>
          <ImpIcon>
            <img src="/images/Logo.svg" alt="logo" />
          </ImpIcon>
          <Navigation>
            {config.map((value) => (
              <Nav
                key={value.label}
                href={value.href}
                text={value.label}
                isActive={location.pathname.includes(value.href)}
              />
            ))}
          </Navigation>
        </HeaderItemContainer>
        <Flex>
          <UserBlock account={account} login={login} logout={logout} />
        </Flex>
      </StyledNav>
      <BodyWrapper>
        <Inner isPushed={false} showMenu={showMenu}>
          {children}
        </Inner>
      </BodyWrapper>
    </Wrapper>
  )
}

export default Menu
