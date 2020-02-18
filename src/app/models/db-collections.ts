export interface Bloggers {
  id: string;
  name: string;
  username: string;
  profilePhoto?: string;
}

export interface Blog {
  id?: string;
  author?: string; // username of the blogger
  jsonUrl?: string; // s3 link of the blog post json
  category?: string;
  timestamp?: Date;
}

export interface Categories {
  id: string;
  category_name: string;
}
