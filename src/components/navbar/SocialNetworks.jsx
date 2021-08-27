import { FiFacebook, FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import { Content, Box, Network } from "../../style/navbar/SocialNetworks";

const SocialNetworks = () => {
  return (
    <Content>
      <Box>
        <Network
          href="https://www.facebook.com/germanrodrigo.diazolarte/"
          target="__blank"
        >
          <FiFacebook />
        </Network>
        <Network
          href="https://www.instagram.com/ungermancho/?hl=es-la"
          target="__blank"
        >
          <FiInstagram />
        </Network>
        <Network href="https://github.com/germandiaz17" target="__blank">
          <FiGithub />
        </Network>
        <Network
          href="https://www.linkedin.com/in/german-diaz-08b5631a8/"
          target="__blank"
        >
          <FiLinkedin />
        </Network>
      </Box>
    </Content>
  );
};

export default SocialNetworks;
