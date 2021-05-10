import Head from 'next/head';
import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';

export default function Pagination({ page }) {
  return (
    <PaginationStyles>
      <Head>
        <title>Sick Fits - Page {page} of ___</title>
      </Head>
      <Link href="/">← Prev</Link>
      <p>Page __ of ___</p>
      <p>__ Items Total</p>
      <Link href="/">→ Next</Link>
    </PaginationStyles>
  );
}
