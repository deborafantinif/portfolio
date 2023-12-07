import styled from "styled-components";

export const ProjectsContent = styled.main`
  /* border: 2px solid red; */
  width: 80%;
  margin: 100px auto;
  
  h1 {
    margin: 30px 0px;
    font-size: 35px;
  }
  `

export const Projects = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Project = styled.div`
    /* border: 2px solid violet; */
    width: 400px;
    margin-bottom: 20px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 8px;
  
    img {
      width: 400px;
      margin: 0px;
      border-radius: 8px 8px 0px 0px;
    }

    div {
      box-shadow: none;
      padding: 10px;
    }

    span {
      font-weight: bold;
    }

    p {
      margin: 10px 0px;
    }
  `

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px !important;
  
  div {
    box-shadow: none;

    img {
      width: 20px !important;
      margin-right: 8px;
    }
  }
  `