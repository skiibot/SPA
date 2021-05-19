import { Component } from "@angular/core";

@Component({
    selector: 'display-post',
    templateUrl: './display-post.component.html',
    styleUrls: ['./display-post.component.scss']
})


export class DisplayPostComponent{
    

    createNewDialog(){
        console.log("You've clicked me!");
    }
}

