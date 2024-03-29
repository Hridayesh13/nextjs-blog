import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import React from 'react';
import { GetStaticProps } from 'next';
import { ChakraProvider } from '@chakra-ui/react';

export default function Home({
	allPostsData,
}: {
	allPostsData: {
		date: string;
		title: string;
		id: string;
	}[];
}) {
	return (
		<ChakraProvider>
			<Layout home>
				<Head>
					<title>{siteTitle}</title>
				</Head>
				<section className={utilStyles.headingMd}>
					<p>
						Hi. I'm <b>Hri</b>. Software Engineer@Rokubunnoni Inc.
					</p>
					<p>Full Stack Developer (Web2 + Web3)</p>
					<p>1 year+ experience.</p>
				</section>

				<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
					<h2 className={utilStyles.headingLg}>Blog</h2>
					<ul className={utilStyles.list}>
						{allPostsData.map(({ id, date, title }) => (
							<li className={utilStyles.listItem} key={id}>
								<Link href={`/posts/${id}`}>{title}</Link>
								<br />
								<small className={utilStyles.lightText}>
									<Date dateString={date} />
								</small>
							</li>
						))}
					</ul>
				</section>
			</Layout>
		</ChakraProvider>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
};
