import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Blog } from "src/app/models/db-collections";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class FetchDataService {
  blogsCollection: AngularFirestoreCollection<Blog>;
  allBlogs: Observable<Blog[]>;

  constructor(public afs: AngularFirestore) {
    // this.allBlogs = this.afs.collection("blogs").valueChanges();
    this.blogsCollection = this.afs.collection("blogs");
    this.allBlogs = this.blogsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Blog;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  getAllBlogs() {
    return this.allBlogs;
  }
}
