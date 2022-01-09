import React from 'react';
import Tags from './Tags';

export default function Footer() {
  return (
    <footer>
      <section className="p-5 border-b">
        <h3 className="mb-3 uppercase tracking-wide">Browse Notes by tag</h3>
        <Tags />
      </section>
      <section className="p-5 border-b">
        <h3 className="mb-3 uppercase tracking-wide">
          Acknowledgement of Country
        </h3>
        <p>
          I acknowledge the Gubbi Gubbi people, the Traditional Owners of the
          land and waterways where I live. I would like to pay my respects to
          Elders past, present and emerging.
        </p>
      </section>
      <section className="p-5 border-b">
        <h3 className="mb-3 uppercase tracking-wide">Get in touch</h3>
        <p>
          If you'd like to get in contact, feel free to email me at contact @
          rachsmith dot com.
        </p>
      </section>
      <section className="p-5 text-sm">
        © {new Date().getFullYear()} Rachel Smith
      </section>
    </footer>
  );
}
