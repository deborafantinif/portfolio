import Menu from "../../components/Menu";
import Footer from "../../components/Footer"
import * as S from "./styles"

function Contact() {
  return (
    <>
    <Menu/>
    <S.Contact>
      <h1>Entre em contato comigo pelo email: <br/>
      <span>deboraferfan@gmail.com</span> <br/>
      <S.Minimum>ou</S.Minimum> <br/>
      <span>(33) 99972-4067</span></h1> <br/>
    </S.Contact>
    <Footer/>
    </>
  );
}

export default Contact;