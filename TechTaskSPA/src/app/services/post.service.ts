import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import {Post} from "../models/posts.models";


@Injectable({providedIn:'root'})

export class PostService{

    public postUpdated:Subject<Post[]> = new Subject<Post[]>();
    private id = '';

    private Posts:Post[] = [
        {id: "fdsgfdgs",
        title:"Hello all!",
        tags: "sdafsdadf",
        content: "What is all this about???"},
        {id: "tdygdh",
        title:"Hello my dudes!",
        tags: "sdafsdadf",
        content: "Hola mi amigos???"},
        {id: "sdf",
        title:"How awesome are you!",
        tags: "sdafsdadf",
        content: "Can't even do this correctly!!!!"},];

    

    getPosts(){
        this.postUpdated.next([...this.Posts]);
    }

    addPost(post:Post){
        if(post.id == ''){
            this.id = this.id+'a';
            post.id = this.id;
        }
        this.Posts.push(post);
        this.postUpdated.next([...this.Posts]);
    }

    removePosts(id:string){
        console.log(id);
        this.Posts = this.Posts.filter( function(post){
            return post.id != id;
        });

        this.postUpdated.next([...this.Posts]);
    }
}