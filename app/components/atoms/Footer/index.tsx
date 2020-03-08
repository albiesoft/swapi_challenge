import { FC } from 'react';
import { Layout } from 'antd';

const Footer: FC = () => {
  const { Footer } = Layout;
  return (
    <Footer>
      Made with <img src="/heart.svg" alt="love" width="30px" /> by Albert
      Fernandez
      <style jsx>{`
        text-align: center;
        img {
          padding-left: 5px;
        }
      `}</style>
    </Footer>
  );
};

export default Footer;
