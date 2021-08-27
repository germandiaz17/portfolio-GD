import { Content, Items} from "../../style/navbar/Sections";

const Sections = () => {
    return ( 
        <Content>
            <div>
                <Items href='#Welcome'>Home</Items>
                <Items href='#aboutMe'>About Me</Items>
                <Items href='#WhatIDo'>What I Do</Items>
                <Items href='#Portfolio'>Portfolio</Items>
                <Items href='#Contact'>Contact</Items>
            </div>
        </Content>
     );
}
 
export default Sections