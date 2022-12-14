import React from 'react';
import Package from '@components/Package';
import type { NextPage } from 'next';
import Head from 'next/head';
import PACKAGE_JSON from '../../package.json';

const { dependencies: DEPENDENCIES } = PACKAGE_JSON;
const dependencies = Object.entries(DEPENDENCIES);

const Home: NextPage = () => (
  <>
    <Head>
      <title>Create Next App with bo-ilerplate</title>
      <meta
        name="description"
        content="Generated by create next app with bo-ilerplate"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Package>
      <Package.List>
        {dependencies.map(dependency => {
          const [name, version] = dependency;
          return (
            <Package.Item key={name}>
              <Package.Name>{name}:</Package.Name>{' '}
              <Package.Version>{version}</Package.Version>
            </Package.Item>
          );
        })}
      </Package.List>
    </Package>
  </>
);

export default Home;
