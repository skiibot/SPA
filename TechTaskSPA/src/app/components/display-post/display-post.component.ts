import { Component } from "@angular/core";
import {Post} from "src/app/models/posts.models";

@Component({
    selector: 'display-post',
    templateUrl: './display-post.component.html',
    styleUrls: ['./display-post.component.scss']
})


export class DisplayPostComponent{
    
    
    posts:Post[] = [
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


    createNewDialog(){
        console.log("This should make a dialog box popup!");
    }
}

