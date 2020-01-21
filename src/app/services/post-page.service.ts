import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PostPageService {
  constructor() {}

  getPost(url: string) {
    return new Promise((resolve, reject) => {
      // const proxyurl = "https://cors-anywhere.herokuapp.com/";
      fetch(url, {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
        .then(res => res.json())
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject();
        });
    });
  }
}
