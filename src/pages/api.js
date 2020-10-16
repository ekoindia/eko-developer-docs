import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import React from 'react';
import Redocusaurus from '../components/Redocusaurus';

function APIDocs() {
  return (
  <Layout
    title={`API Docs`}
    description={`Open API Reference Docs for the API`}
  >
    <Redocusaurus spec="https://ekoindia.github.io/openapi-spec/openapi.yaml" />
  </Layout>
  );
}

export default APIDocs;

