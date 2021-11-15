import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Tags from './Tags';

const HomeHeader = () => (
  <>
    <p className="mb-5">
      Hi 👋🏼 &nbsp;I'm Rach. A{' '}
      <Link to="/full-stack-t-shaped-comb-shaped-developer-or-engineer/">
        developer
      </Link>{' '}
      building software for CodePen, wife, mother of two, productivity nerd and
      recovering screen addict. This is my digital garden.
    </p>
    <p className="mb-10">
      I am in process of redesigning this website in public. It has been
      stripped back to the bare minimum and I will make gradual improvements as
      time goes on. You can follow the changes or suggest your own at the{' '}
      <a href="https://github.com/rachsmithcodes/rachsmith.com">GitHub repo</a>.
    </p>
    <p>
      <Link
        className="mr-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        to="/all-notes/"
      >
        See all the notes
      </Link>
      <a
        href="https://feedly.com/i/subscription/feed/https://rachsmith.com/rss/"
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Subscribe to RSS feed
      </a>
    </p>
  </>
);

const PageHeader = () => (
  <h2 className="mb-5">
    <Link to="/" className="text-black font-headings">
      Rach Smith's digital garden
    </Link>
    .
  </h2>
);

const NoteHeader = () => (
  <h2 className="mb-5">
    A note from <Link to="/">Rach Smith's digital garden</Link>.
  </h2>
);

const Header = ({ page }) => {
  let header = null;
  switch (page) {
    case 'home':
      header = <HomeHeader />;
      break;
    case 'page':
      header = <PageHeader />;
      break;
    case 'note':
      header = <NoteHeader />;
      break;
  }
  return (
    <section className="border-b p-5">
      {header}
      {/* <Tags /> */}
    </section>
  );
};

export default Header;
