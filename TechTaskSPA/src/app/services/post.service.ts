import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import {Post} from "../models/posts.models";


@Injectable({providedIn:'root'})

export class PostService{

    public postUpdated:Subject<Post[]> = new Subject<Post[]>();

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
        this.Posts.push(post);
        this.postUpdated.next([...this.Posts]);
    }



}