import { Init, TitleContent, DarkScreen } from "../../style/content/welcome";
import '../../style/content/welcome.css'

const Welcome = () => {
    return ( 
        <Init id='Welcome'>
            <DarkScreen>
                <TitleContent>
                    <h3 className='Wlcm'>Welcome</h3>
                    <h1 className='prfsc'>I´m Developer</h1>
                    <p>From Colombia To The World!</p>
                </TitleContent>
            </DarkScreen>
        </Init>
     );
}
 
export default Welcome;