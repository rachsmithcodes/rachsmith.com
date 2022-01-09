import React from 'react';
import { Link } from 'gatsby';

export default function NoteListItem({ slug, title, excerpt, tags }) {
  return (
    <li className="mb-6">
      <Link to={`/${slug}/`} className="text-black font-demi">
        {title}
      </Link>{' '}
      {excerpt && `- ${excerpt} `}
      {tags?.map((tag) => (
        <Link className="text-base mr-2" to={`/tag/${tag}/`}>{`#${tag}`}</Link>
      ))}
    </li>
  );
}
