import "../../style/content/extras.css";
import {
  Content,
  ContentTitle,
  BackTitle,
  FrontTitle,
  ContentSection
} from "../../style/content/TitlePricipal";
import { Sections, IconSec, TitleSec } from "../../style/content/WhatIDo";
import { BsPencil, BsCodeSlash, BsFillBookmarksFill, BsPeople } from "react-icons/bs";

const WhatIDo = () => {
  return (
    <Content id="WhatIDo" className="services">
      <div className="row">
        <ContentTitle className="col-12">
          <BackTitle>
            SERVICES
            <div>
              <FrontTitle>What I Do</FrontTitle>
            </div>
          </BackTitle>
        </ContentTitle>
      </div>
      <ContentSection>
      <div className="row">
        <Sections className="col-sm-12 col-md-6">
          <IconSec>
            <BsPencil />
          </IconSec>
          <div>
            <TitleSec>Web Design</TitleSec>
            <p>
              If you need to have a good design for your website or
              technological application, you can contact me to have a fresher
              and more desirable interface, with UI / UX.
            </p>
          </div>
        </Sections>
        <Sections className="col-sm-12 col-md-6">
          <IconSec>
            <BsCodeSlash />
          </IconSec>
          <div>
            <TitleSec>Develop</TitleSec>
            <p>
              I have extensive knowledge in software development technologies,
              which you can implement in your projects without a doubt.
            </p>
          </div>
        </Sections>
      </div>
      <div className="row">
        <Sections className="col-sm-12 col-md-6">
          <IconSec>
            <BsFillBookmarksFill />
          </IconSec>
          <div>
            <TitleSec>Mentoring</TitleSec>
            <p>
            If what you need is knowledge, you are in the perfect place, 
            I have software development teaching spaces that will give you 
            the knowledge you need.
            </p>
          </div>
        </Sections>
        <Sections className="col-sm-12 col-md-6">
          <IconSec>
            <BsPeople />
          </IconSec>
          <div>
            <TitleSec>Collaborations</TitleSec>
            <p>
            Are you looking for a member of your team? do not look any further! 
            contact me and let's write code together!
            </p>
          </div>
        </Sections>
      </div>
      </ContentSection>
    </Content>
  );
};

export default WhatIDo;
