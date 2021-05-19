import { Component } from "@angular/core";
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

    posts:Post[] = [null];
    filtertext:string = '';


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

    filterPosts(value:any){
        console.log("currently typing!");
        this.filtertext += value.target.value;
        this.posts = this.posts.filter( function(post){
            return post.title.toLocaleLowerCase().includes(value)
        });
    }

    sortAscending(){
        var sorted = this.posts.sort((a, b) => a.title.localeCompare(b.title));
        this.posts = sorted;
    }

    sortDescending(){
        var sorted = this.posts.sort((a, b) => a.title.localeCompare(b.title)).reverse();
        this.posts = sorted;
    }






}

