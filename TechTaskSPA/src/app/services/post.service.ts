import { Injectable } from "@angular/core";
import {Post} from "../models/posts.models";


@Injectable({providedIn:'root'})

export class PostService{
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
        return [...this.Posts];
    }

    addPost(post:Post){
        this.Posts.push(post);
    }


}