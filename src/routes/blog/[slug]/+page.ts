import { error } from '@sveltejs/kit';
import { getPost } from '$lib/posts';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const post = await getPost(params.slug);
	
	if (!post) {
		error(404, 'Post not found');
	}
	
	return {
		post
	};
};
