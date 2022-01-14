import styled from 'styled-components';
import Link from 'next/link';

const NavbarCont = styled.nav`
  box-sizing: border-box;
  width: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;

  .right-items > a {
    padding-left: 20px;
  }
`;

const Navbar = () => {
  return (
    <NavbarCont /* className="glass" */>
      <div className="left-items">
        <Link href="/">Logo</Link>
      </div>
      <div className="right-items">
        <Link href="/about">About</Link>
        <Link href="/users">Contact</Link>
      </div>
    </NavbarCont>
  );
};

export default Navbar;
