import { Component } from "@angular/core";
import {Post} from "src/app/models/posts.models";
import { PostService } from "src/app/services/post.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CreatePostComponent } from "../create-post-dialog/create-post.component";


@Component({
    selector: 'display-post',
    templateUrl: './display-post.component.html',
    styleUrls: ['./display-post.component.scss']
})


export class DisplayPostComponent{

    posts:Post[] = [];

    constructor(public postService:PostService, private dialog:MatDialog){
        this.posts = postService.getPosts();
    }


    createNewDialog(){
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.closeOnNavigation = true;
        dialogConfig.width = '800px';

        this.dialog.open(CreatePostComponent, dialogConfig);

    }
}

