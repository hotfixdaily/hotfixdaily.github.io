export interface Bloggers {
  id: string;
  name: string;
  username: string;
  profilePhoto?: string;
}

export interface Blog {
  id?: string;
  headline?: string;
  description?: string;
  introImage?: string;
  author?: string; // username of the blogger
  jsonUrl?: string; // s3 link of the blog post json
  category?: string;
  timestamp?: Date;
  readTime?: number;
  queryParam?: string;
}

export interface Category {
  id: string;
  categoryName: string;
}

export class DisplayCategory {
  important: Category[];
  more: Category[][];
}
