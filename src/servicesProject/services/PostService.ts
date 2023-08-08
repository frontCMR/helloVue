import { Post } from "../ts/post.model";
import { ref, Ref } from "vue";
// url = "https://jsonplaceholder.typicode.com/posts";
export class PostService {
  private posts: Ref<Post[]>;
  url: string;
  constructor(url: string) {
    this.url = url;
    this.posts = ref<Post[]>([]);
  }

  getPosts(): Ref<Post[]> {
    return this.posts;
  }

  async fetchAllPosts(): Promise<void> {
    try {
      const res = await fetch(this.url);
      const data: Post[] = await res.json();
      this.posts.value = data;
    } catch (error) {
      console.log(error);
    }
  }
}
