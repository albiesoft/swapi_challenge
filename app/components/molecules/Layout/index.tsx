import { FC } from 'react';
import { Layout } from 'antd';
import Loading from '../../atoms/Loading';
import Footer from '../../atoms/Footer';
import Header from '../../atoms/Header';

const MainLayout: FC = ({ children }) => {
  const { Content } = Layout;

  return (
    <Layout>
      <Loading>
        <Header />
        <Content style={{ padding: '40px 50px 0' }}>{children}</Content>
        <Footer />
      </Loading>
      <style jsx>{`
        min-height: calc(100vh - 139px);
      `}</style>
    </Layout>
  )
};

export default MainLayout;