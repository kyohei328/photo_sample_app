import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import Login from './components/Login';
// import IndexPhoto from './components/IndexPhoto';
// import AddPhoto from './components/AddPhoto';
import UserCreate from './components/UserCreate';
import Top from './components/Top';



const Logo = styled.div`
  font-weight: bold;
  font-size: 23px;
  letter-spacing: 3px;
`
const Nabvar = styled.nav`
  background: #dcdcdc;
  min-height: 6vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const NavItems = styled.ul`
  display: flex;
  width: 400px;
  max-width: 40%;
  justify-content: space-around;
  list-style: none;
`
const NavItem = styled.li`
  font-size: 19px;
  font-weight: bold;
  color: #000000;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`
const Wrapper = styled.div`
  width: 700px;
  max-width: 85%;
  margin: 20px auto;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`

function App(props) {
  const [current_user, setCurrent_user] = useState('');

  const current_userChange = (user) => {
    setCurrent_user(user);
  };

  console.log(current_user)

  return (
    <>
      <Nabvar>
        <Logo>
          <StyledLink to="/">
            PhotoSample
          </StyledLink>
        </Logo>
        <NavItems>
          <NavItem>
            {/* <StyledLink to="/photo/new">
              アップロード
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/photo/index">
              写真一覧
            </StyledLink> */}
          </NavItem>
          <NavItem>
            <StyledLink to="/Login">
              ログイン
            </StyledLink>
          </NavItem>
          <NavItem>
            {current_user}
          </NavItem>
        </NavItems>
      </Nabvar>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Top />}/>
          {/* <Route path="/photo/index" element={<IndexPhoto />}/>
          <Route path="/photo/new" element={<AddPhoto />}/> */}
          <Route path="/Login" element={<Login onUserChange={current_userChange}/>}/>
          <Route path="/user/new" element={<UserCreate />}/>
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
