import Head from 'next/head';
import Layout from '../components/molecules/Layout';
import { Row, Col } from 'antd';

const Home = () => (
  <Layout>
    <Head>
      <title>Albert Fernandez Swapi Test</title>
    </Head>
    <Row>
      <Col className="home-intro">
        <h1>Welcome to the Swapi Test</h1>
        <h2>By Albert Fernandez</h2>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          I would like to explain why I choosen the frameworks that I have used
          and why made sense here.
        </p>
        <h3>API - NESTJS</h3>
        <p>
          To build the API, I used NestJS. This is a Express/Fastify framework
          that follows loads of concepts of Angular Architecture.
        </p>
        <p>Why NestJS?</p>
        <p>
          NestJS is perfect to create quick servers. It is super quick to have a
          Express / Fastify servers. I feel it is a great solution for small
          servers or Micro services.
        </p>
        <h3>FRONTEND - NEXTJS</h3>
        <p>
          For the frontend, I have choosen NextJS. This is a powerful framework
          for SSR React applications. It can dynamically generate the pages on
          runtime or create them statically. Also, with the latest version now
          it can generate static files dynamicly.
        </p>
        <p>Why NextJS?</p>
        <p>
          I guess already says why, it is the best SSR React solution right now.
        </p>
        <h3>TESTING</h3>
        <p>Testing is done with Jest.</p>
        <h3>START APP</h3>
        <p>
          You will need docker installed to run it through docker-compose. I
          done it this way so it is simple to run and test. Ideally, I would
          never have the API and the frontend in the same server.
        </p>
        <p>
          I guess you know how to start up a docker compose but just in case you
          can run the following line:
        </p>
        <code>docker-compose up --build</code>
        <p>I hope you like it</p>
      </Col>
    </Row>
  </Layout>
);

export default Home;
