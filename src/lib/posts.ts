import type { Component } from 'svelte';

export interface Post {
	slug: string;
	title: string;
	description: string;
	date: string;
	tags: string[];
	published: boolean;
}

export interface PostWithContent extends Post {
	content: Component;
}

export function getPosts(): Post[] {
	const modules = import.meta.glob('/src/lib/posts/*.md', { eager: true });
	
	const posts: Post[] = [];
	
	for (const path in modules) {
		const module = modules[path] as { metadata: Omit<Post, 'slug'> };
		const slug = path.split('/').pop()?.replace('.md', '') ?? '';
		
		if (module.metadata.published) {
			posts.push({
				slug,
				...module.metadata
			});
		}
	}
	
	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPost(slug: string): Promise<PostWithContent | null> {
	try {
		const module = await import(`../lib/posts/${slug}.md`);
		
		return {
			slug,
			...module.metadata,
			content: module.default
		};
	} catch {
		return null;
	}
}
