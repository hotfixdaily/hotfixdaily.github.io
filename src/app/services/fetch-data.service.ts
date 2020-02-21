import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Blog, Category } from "src/app/models/db-collections";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class FetchDataService {
  blogsCollection: AngularFirestoreCollection<Blog>;
  categoriesCollection: AngularFirestoreCollection<Category>;
  allBlogs: Observable<Blog[]>;
  allCategories: Observable<Category[]>;

  constructor(public afs: AngularFirestore) {
    // this.allBlogs = this.afs.collection("blogs").valueChanges();
    this.blogsCollection = this.afs.collection("blogs");
    this.categoriesCollection = this.afs.collection("categories");
    this.allBlogs = this.blogsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Blog;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
    this.allCategories = this.categoriesCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as any;
          data.id = a.payload.doc.id;
          const formattedData: Category = {
            id: data.id,
            categoryName: data.category_name
          };
          return formattedData;
        });
      })
    );
  }

  getAllBlogs() {
    return this.allBlogs;
  }

  getAllCategories() {
    return this.allCategories;
  }

  getBlogDetailsByQuery(q: string) {
    return new Promise((resolve, reject) => {
      this.afs
        .collection("blogs", ref => ref.where("query", "==", q))
        .valueChanges()
        .subscribe(
          (snaphot: any) => {
            const data = snaphot[0] ? snaphot[0] : reject();
            const blogData: Blog = {
              id: data.id,
              author: data.author,
              jsonUrl: data.json_url,
              category: data.category,
              timestamp: data.created_at
            };
            resolve(blogData);
          },
          (error: any) => {
            console.error(error);
            reject();
          }
        );
    });
  }
}
