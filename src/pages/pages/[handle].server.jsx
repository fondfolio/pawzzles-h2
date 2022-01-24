import {useParams} from 'react-router-dom';
import {useShopQuery, RawHtml} from '@shopify/hydrogen';
import gql from 'graphql-tag';
import NotFound from '../../components-pawzzles/NotFound.server';
import Layout from '../../components-pawzzles/Layout.server';

export default function Page() {
  const {handle} = useParams();
  const {data} = useShopQuery({query: QUERY, variables: {handle}});

  if (!data.pageByHandle) {
    return <NotFound />;
  }

  const page = data.pageByHandle;

  return (
    <Layout>
      <h1 className="text-2xl font-bold">{page.title}</h1>
      <RawHtml string={page.body} className="prose mt-8" />
    </Layout>
  );
}

const QUERY = gql`
  query PageDetails($handle: String!) {
    pageByHandle(handle: $handle) {
      title
      body
    }
  }
`;
