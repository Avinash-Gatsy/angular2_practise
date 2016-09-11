import {Component} from 'angular2/core'
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {StarComponent} from './star.component'
import {LikeComponent} from './like.component'
import{VoteComponent}from'./vote.component'
import{SwitchComponent}from'./switch.component'

@Component({
    selector: 'my-app',
    templateUrl:'app/app.template.html',
    directives: [CoursesComponent,AuthorsComponent,StarComponent,LikeComponent,VoteComponent,SwitchComponent]
})
export class AppComponent { 
    isActive = false;
    title="Angular2";
    post = {
        isFavourite : true,
        voteCount:10,
        myVote:0,
        viewMode:'list'
    }
    tweet={
        totalLikes:10,
        iLike:false
    }
    onDivClick(){
        console.log("Handled by Div");
    }
    onClick($event){
        $event.stopPropagation();
        console.log("clicked",event);
    }
    onFavouriteChange($event){
        console.log($event);
    }
    onVote($event){
        console.log($event);
    }
}