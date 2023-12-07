import styled from "styled-components";

export const Home = styled.main`
  /* border: 2px solid red; */
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 50px auto;
  font-size: 30px;

  span {
    color: #524a48;
    background: linear-gradient(90deg, rgba(19,176,245,1) 0%, rgba(231,15,170,1) 100%);
    background-clip: text;
    opacity: 70%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  img {
    width: 350px;
	  border-radius: 50%;
    box-sizing: content-box;
    border-width: 8px;
    border-style: solid;
    border-image-slice: 1;
    border: double 5px transparent;
    background-image: linear-gradient(white, white), radial-gradient(circle at top, rgba(19,176,245,1), rgba(231,15,170,1));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  @media only screen and (max-width: 600px){
    display: block;

    h1 {
      font-size: 50px;
    }
  }
`