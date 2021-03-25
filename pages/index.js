import { getAllFilesFrontMatter } from '@lib/mdx'

export default function Home({ items }) {
	const filteredBlogPosts = items.sort(
		(a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
	)

	return (
		<div>
			<h1>Browse</h1>
			<p>
				Fathom Analytics provides simple, privacy-focused website analytics
				software to our amazing customers. We’ve been doing this for several
				years now, and we’ll be doing it for many years to come.
			</p>
			<div>
				{filteredBlogPosts.map((item) => (
					<article key={item.slug}>{item.title}</article>
				))}
			</div>
		</div>
	)
}

export const getStaticProps = async () => {
	const items = await getAllFilesFrontMatter('item')

	return {
		props: {
			items
		}
	}
}
