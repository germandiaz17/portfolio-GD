import {
    Content,
    ContentTitle,
    BackTitle,
    FrontTitle,
    ContentInfo,
  } from "../../style/content/TitlePricipal";
  import { AiOutlineWhatsApp, AiOutlineMail, AiFillFacebook, AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
  import { TitleContact, InfoDiv, Social, InputText, AreaText, FormInfo} from "../../style/content/Contact";

const Contact = () => {
    return ( 
        <Content id='Contact'>
            <div className='row'>
                <ContentTitle className='col-12'>
                        <BackTitle>CONTACT
                            <div>
                                <FrontTitle>Contact Me</FrontTitle>
                            </div>
                        </BackTitle>
                </ContentTitle>
            </div>
            <ContentInfo className='row'>
                <div className='col-4'>
                    <TitleContact>MY INFO OF CONTACT</TitleContact>
                    <InfoDiv>
                        <AiOutlineWhatsApp /> <p>3208715459</p>
                    </InfoDiv>
                    <InfoDiv>
                        <AiOutlineMail /> <p>germanrodrigo.2003@hotmail.com</p>
                    </InfoDiv>
                    <Social>
                        <a href='https://www.facebook.com/germanrodrigo.diazolarte/' target="__blank"><AiFillFacebook /></a>
                        <a href='https://www.instagram.com/ungermancho/?hl=es-la' target="__blank"><AiFillInstagram /></a>
                        <a href='https://github.com/germandiaz17' target="__blank"><AiFillGithub /></a>
                        <a href='https://www.linkedin.com/in/german-diaz-08b5631a8/' target="__blank"><AiFillLinkedin /></a>
                    </Social>
                </div>
                <div className='col-sm-12 col-md-8'>
                    <TitleContact>SEND US A NOTE</TitleContact>
                    <form>
                        <FormInfo>
                            <InputText
                                className='col-12 col-sm-12 col-md-5'
                                type='text'
                                placeholder='Name'
                            />
                            <InputText
                                className='col-12 col-sm-12 col-md-5'
                                type='text'
                                placeholder='Email'
                            />
                        </FormInfo>
                        <AreaText 
                            className='col-12'
                            placeholder='Note'
                        />
                    </form>
                </div>
            </ContentInfo>
        </Content>
    );
}
 
export default Contact;