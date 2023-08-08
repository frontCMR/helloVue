import { Post } from "../ts/post.model";
import { ref, Ref } from "vue";
// url = "https://jsonplaceholder.typicode.com/posts";
export class PostService {
  private posts: Ref<Post[]>;
  private post: Ref<Post>
  url: string;
  constructor(url: string) {
    this.url = url;
    this.posts = ref<Post[]>([]);
    this.post = ref<Post>({
      id: 0,
      userId: 0,
      title: "",
      body: "",
    });
  }

  getPosts(): Ref<Post[]> {
    return this.posts;
  }
  getPost(): Ref<Post> {
    return this.post;
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
  async fetchPost(): Promise<void> {
    try {
      const res = await fetch(this.url);
      const data: Post = await res.json();
      this.post.value = data;
    } catch (error) {
      console.log(error);
    }
  }
}
