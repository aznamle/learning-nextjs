import React from 'react'

import Link from 'next/link';
import Head from 'next/head';

import { getUserList } from '../lib/api'
import AniCard from '../components/AniCard';
 
export default function Home({ list }) {
  //console.log(list);
  return (
    <div className='bg-gray-200'>
      <Head>
          <title>Learning nextjs</title>
      </Head>
      <div>
      <Link href='/AnimeList'>
        <a>View</a>
      </Link>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-20'>
        {
          list.map(show => (
            <div className="p-4">
            <AniCard name={show.media.title.romaji} image={show.media.coverImage.large} description={show.notes} />
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const data  = (await getUserList())
  return {
    props: {
      list: data.entries
    }
  }
}

