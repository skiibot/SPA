import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from "src/app/services/post.service";
import {MatDialogRef} from "@angular/material/dialog";



@Component({
    selector: 'create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.scss']
})


export class CreatePostComponent{
    postsForm:FormGroup;
    title:string = '';
    tags:string = '';
    content:string = '';


    constructor(private fb: FormBuilder, 
        public postsService:PostService,
        private dialogRef:MatDialogRef<CreatePostComponent>){
        this.postsForm = this.fb.group({
            title: ['', Validators.required],
            tags: ['', Validators.required],
            content: ['', Validators.required]
        });
    }

    onSubmit(){
        if(this.postsForm.valid){
            this.postsService.addPost({
                id:'',
                title:this.postsForm.controls.title.value,
                tags:this.postsForm.controls.tags.value,
                content:this.postsForm.controls.content.value
            })
            console.log(`title ${this.postsForm.controls.title.value}`);
            this.dialogRef.close();
        }


    }

    onClose(){
        this.dialogRef.close();

    }


}