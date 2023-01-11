import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import React from "react";
import { GetStaticProps } from "next";
import { ModalExample } from "../components/modal/SampleModal";
import { AlertDialogExample } from "../components/modal/DeleteAlert";
import { DrawerExample } from "../components/modal/UserDrawer";
import { Text, Button, ButtonGroup, ChakraProvider, SimpleGrid, Box } from "@chakra-ui/react";
import { ReportCard } from "../components/ReportCard";
import { PageButton } from "../components/PageButton";
import { ToggleColorMode } from "../components/ToggleColor";
import { FilterArray } from "../components/FilterArray";

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
		<ChakraProvider >
			<Layout home>

				<Head>
					<title>{siteTitle}</title>
				</Head>
				{/* <section className={utilStyles.headingMd}>
					<p>
						Hi. I'm <b>Hri</b>. Software Engineer@Rokubunnoni Inc.
					</p>
					<p>Full Stack Developer (Web2 + Web3)</p>
					<p>1 year+ experience.</p>
				</section>

				<section
					className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
				>
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
				</section> */}

				<section>
					<ButtonGroup spacing="6">
						<ModalExample />
						<AlertDialogExample />
						<DrawerExample />
						<ToggleColorMode />
					</ButtonGroup>
				</section>
				<br />
				<section>
					<FilterArray />
					<br />
					<br />
					<SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
						<ReportCard />
						<ReportCard />
						<ReportCard />
						<ReportCard />
						<ReportCard />
					</SimpleGrid>
				</section>
				<br />
				<PageButton pageCount={5} currentPage={1} />
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
