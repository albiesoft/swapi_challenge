import { NextPage } from 'next';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import dayjs from 'dayjs';
import { Row, Col, Card } from 'antd';
import Layout from '../../components/molecules/Layout';
import { RocketTwoTone, SmileTwoTone, FireTwoTone } from '@ant-design/icons';

interface IFilm {
  Title: string;
  Director: string;
  ReleaseDate: Date;
}

interface IProps {
  planet: {
    Name: string;
    Climate: string;
    Population: number;
    Films: IFilm[];
  };
}

const PlanetsPage: NextPage<IProps> = ({ planet }) => (
  <Layout>
    <Head>
      <title>Planet {planet.Name}</title>
    </Head>
    <section className="planet-info">
      <h1>
        <RocketTwoTone /> {planet.Name}
      </h1>
      <p>
        <SmileTwoTone /> Population: {planet.Population}
      </p>
      <p>
        <FireTwoTone /> Climate: {planet.Climate}
      </p>
    </section>
    <Row className="planet-films" gutter={16}>
      {planet.Films &&
        planet.Films.map((film: IFilm) => (
          <Col xs={24} sm={24} md={12} lg={8} key={film.Title}>
            <Card title={film.Title} style={{ marginBottom: '16px' }}>
              <p>Realese Date: {dayjs(film.ReleaseDate).format('DD MMMM YYYY')}</p>
              <p>Director: {film.Director}</p>
            </Card>
          </Col>
        ))}
    </Row>
    <style jsx>{`
      .planet-info {
        background: #fff;
        padding: 10px 20px;
        margin-bottom: 20px;
      }
    `}</style>
  </Layout>
);

PlanetsPage.getInitialProps = async ctx => {
  const { query, req } = ctx;
  const url = !!req ? 'http://api:3002' : 'http://localhost:3002';
  const res = await fetch(`${url}/planets/${query.name}/`);
  const planet = await res.json();

  return {
    planet
  };
};

export default PlanetsPage;
