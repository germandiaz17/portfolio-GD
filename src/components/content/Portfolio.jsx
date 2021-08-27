import "../../style/content/extras.css";
import {
  Content,
  ContentTitle,
  BackTitle,
  FrontTitle,
  ContentSection,
} from "../../style/content/TitlePricipal";
import proyect1 from "../../img/soapProyect.PNG";
import proyect2 from "../../img/rickProyect.PNG";
import { ImgContent, Image} from "../../style/content/portfolio";
import { BsFillCursorFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const PortfolioSec = () => {
  return (
    <Content id="Portfolio" className="services">
      <div className="row">
        <ContentTitle className="col-12">
          <BackTitle>
            PORTFOLIO
            <div>
              <FrontTitle>My Work</FrontTitle>
            </div>
          </BackTitle>
        </ContentTitle>
      </div>
      <ContentSection>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <ImgContent className="overload">
              <div className="overloadLeft">
                <a className='item'
                  href="https://www.soproyect.tech/lista-objetos"
                  target="__blank"
                >
                  <BsFillCursorFill />
                </a>
              </div>
              <div className="overloadRight">
              <a className='item' href="https://github.com/jsgsco/sopv2" target="__blank">
                <AiFillGithub />
              </a>
              </div>
              <Image src={proyect1} alt="image1" />
            </ImgContent>
          </div>
          <div className="col-sm-12 col-md-6">
            <ImgContent className="overload">
              <div className="overloadLeft">
              <a className='item'
                href="https://rick-and-morthy-1w0zolokh-germandiaz17.vercel.app/"
                target="__blank"
              >
                <BsFillCursorFill />
              </a>
              </div>
              <div className="overloadRight">
              <a className='item'
                href="https://github.com/germandiaz17/rick-and-morthy"
                target="__blank"
              >
                <AiFillGithub />
              </a>
              </div>
              <Image src={proyect2} alt="image1" />
            </ImgContent>
          </div>
        </div>
      </ContentSection>
    </Content>
  );
};

export default PortfolioSec;
