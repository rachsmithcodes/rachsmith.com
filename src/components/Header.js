import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Tags from './Tags';

const HomeHeader = () => (
  <p className="">
    Hi 👋🏼 &nbsp;I'm Rach. A developer building software for CodePen, wife,
    mother of two, productivity nerd and recovering screen addict. This is my
    digital garden.
  </p>
);

const PageHeader = () => (
  <Link to="/" className="text-black font-headings">
    Rach Smith's digital garden
  </Link>
);

const NoteHeader = () => (
  <h2 className="mb-5">
    A note from <Link to="/">Rach Smith's digital garden</Link>
  </h2>
);

const Header = ({ page }) => {
  console.log(page);
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
