import { Content, ContentTitle, BackTitle, FrontTitle, ContentInfo } from "../../style/content/TitlePricipal";
import { SpanName, Email, DownloadBtn } from "../../style/content/AboutMe";

const AboutMe = () => {
    return ( 
        <Content id='aboutMe'>
            <div className='row'>
                <ContentTitle className='col-12'>
                        <BackTitle>ABOUT ME
                            <div>
                                <FrontTitle>Know Me More</FrontTitle>
                            </div>
                        </BackTitle>
                </ContentTitle>
            </div>
            <ContentInfo className='row'>
                <div className='col-sm-12 col-md-6'>
                    <h3>I´m <SpanName>German Diaz</SpanName>, a Web Developer</h3>
                    <p>
                    I am German Diaz, I am 18 years old, I started writing code 
                    at the age of 15, since then I realized that what I like in 
                    life is software development. I am currently in the process 
                    of education in all areas of development. Today I live in 
                    Colombia, in the city of Bogota, I am studying Full Stack web 
                    development and computer science at Academlo and ADSI 
                    (analysis and development of information systems) 
                    virtually at SENA.
                    </p>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <p><SpanName>Name: </SpanName>German Diaz</p>
                    <hr />
                    <p><SpanName>Email: </SpanName><Email href="/">germanrodrigo.2003@hotmail.com</Email></p>
                    <hr />
                    <p><SpanName>Age: </SpanName>18</p>
                    <hr />
                    <p><SpanName>From: </SpanName>Bogota, Colombia</p>
                    <div>
                    <DownloadBtn>Download CV</DownloadBtn>
                    </div>
                </div>
            </ContentInfo>
        </Content>
     );
}
 
export default AboutMe;