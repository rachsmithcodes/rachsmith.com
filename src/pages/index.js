import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import NoteListItem from '../components/NoteListItem';

const IndexPage = () => (
  <Layout page="home">
    <Seo title="Home" />
    <div className="p-5">
      <h3 className="font-headings text-xl mb-3">Try these</h3>
      <ul className="list-none">
        <NoteListItem slug="screen-time" title="Screen Time" />
      </ul>
      Or you can see <Link to="/all-notes/">all the notes</Link>
    </div>
  </Layout>
);

export default IndexPage;
