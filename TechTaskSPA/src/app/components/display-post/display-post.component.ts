import { Component, Input } from "@angular/core";
import {Post} from "src/app/models/posts.models";
import { PostService } from "src/app/services/post.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CreatePostComponent } from "../create-post-dialog/create-post.component";
import {lodash} from 'lodash';

@Component({
    selector: 'display-post',
    templateUrl: './display-post.component.html',
    styleUrls: ['./display-post.component.scss']
})


export class DisplayPostComponent{

    posts:Post[] = [];
    filtertext:string = '';
    filterPosts;


    constructor(public postService:PostService, private dialog:MatDialog){
        postService.postUpdated.subscribe( 
            result =>{
                this.posts = result;
        });
        postService.getPosts();
    }

    


    createNewDialog(){
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.closeOnNavigation = true;
        dialogConfig.width = '800px';

        this.dialog.open(CreatePostComponent, dialogConfig);

    }

    onDelete(id:string){
        this.postService.removePosts(id);
    }
    /*
    filterdPosts(value:any){
        if(value != ''){
            console.log(value);
            console.log("I am here!");
            const result = this.ArrayFilter(this.posts,value);
            this.filterPosts = result;
        }else{
            this.filterPosts = this.posts;
        }

    }
    */

    sortAscending(){
        var sorted = this.posts.sort((a, b) => a.title.localeCompare(b.title));
        this.posts = sorted;
    }

    sortDescending(){
        var sorted = this.posts.sort((a, b) => a.title.localeCompare(b.title)).reverse();
        this.posts = sorted;
    }

    /*
    ArrayFilter(posts:Post[], value:string){
        let finalresult = posts.forEach( element =>{
            let result:Post[] = [];
            if(element.title.includes(value)){
                result.push(element);
            }
            console.log(result);
            return result;
        });

        return finalresult;
    }

    */



}

