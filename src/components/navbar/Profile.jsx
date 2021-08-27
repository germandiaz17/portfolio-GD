import { Content, Circle, ImageLogo } from "../../style/navbar/Profile";
import logo from '../../img/logo.jpg'

const Profile = () => {
    return ( 
        <Content>
            <Circle>
                    <ImageLogo src={logo} alt='logo' />
            </Circle>
        </Content>
     );
}
 
export default Profile;