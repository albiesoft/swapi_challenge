import { FC, useState } from 'react';
import { Spin } from 'antd';
import Router from 'next/router';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loading: FC = ({ children }) => {
  const [loanding, setLoanding] = useState(false);
  Router.events.on('routeChangeStart', () => setLoanding(true));
  Router.events.on('routeChangeComplete', () => setLoanding(false));
  Router.events.on('routeChangeError', () => setLoanding(false));
  
  if (loanding) {
    return (
      <Spin indicator={antIcon} tip="Loading...">
        {children}
      </Spin>
    );
  }

  return (
    <>
      {children}
    </>
  );
}

export default Loading;
