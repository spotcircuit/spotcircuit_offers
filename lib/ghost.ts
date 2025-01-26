import fetch from 'cross-fetch';

const ghostUrl = process.env.GHOST_API_URL || 'http://localhost:2368';
const ghostKey = process.env.GHOST_CONTENT_API_KEY || '';

interface GhostPost {
    id: string;
    slug: string;
    title: string;
    html: string;
    feature_image: string | null;
    excerpt: string;
    reading_time: number;
    published_at: string;
    tags: any[];
    authors: any[];
}

interface GhostResponse {
    posts: GhostPost[];
}

export async function getPosts() {
    try {
        if (!process.env.GHOST_API_URL || !process.env.GHOST_CONTENT_API_KEY) {
            console.error('Ghost API URL or Content API Key not set');
            return [];
        }

        const res = await fetch(
            `${ghostUrl}/ghost/api/v3/content/posts/?key=${ghostKey}&include=tags,authors&limit=all`,
            { next: { revalidate: 60 } }
        );
        
        if (!res.ok) {
            console.error(`Failed to fetch posts: ${res.status}`);
            return [];
        }

        const data = await res.json() as GhostResponse;
        return data.posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export async function getSinglePost(postSlug: string) {
    try {
        const res = await fetch(
            `${ghostUrl}/ghost/api/v3/content/posts/slug/${postSlug}/?key=${ghostKey}&include=tags,authors`,
            { next: { revalidate: 60 } }
        );

        if (!res.ok) {
            throw new Error(`Failed to fetch post: ${res.status}`);
        }

        const data = await res.json();
        return data.posts[0];
    } catch (err) {
        console.error('Error fetching post:', err);
        throw err;
    }
}
