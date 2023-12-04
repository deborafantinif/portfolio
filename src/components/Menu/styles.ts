import styled from "styled-components";

export const Menu = styled.div`
  /* border: 2px solid red; */
  display: flex;
  width: 80%;
  margin: 20px auto;
`

export const Logo = styled.div`
  img {
    width: 100px;
  }
`

export const Links = styled.div`
  ul {
    display: flex;
    list-style-type: none;

    a {
      text-decoration: none;
      padding-left: 20px;
      font-weight: 500;
      font-size: 16px;
    }
  }
  width: 70%;
  display: flex;
  justify-content: end;
  margin: auto;
`

export const Icons = styled.div`
  margin: auto 0px;

  a {
    padding-left: 20px;
  }

  img {
    width: 30px;
  }
`