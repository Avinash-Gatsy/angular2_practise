import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from'./auto-grow.directive'
@Component({
    selector: 'courses',
    template: `
    <div *ngIf="courses.length > 0">
    <h2>Courses</h2>
    {{ title }}
    </div>
    <div *ngIf="courses.length == 0">
    you don't have any courses yet
    </div>
    <input type = "text" autoGrow/>
    <ul>
    <li *ngFor="#course of courses,#i = index">
    {{i + 1}} - {{ course }}
    </li>
    </ul>
    `,
    providers:[CourseService],
    directives:[AutoGrowDirective]
})
export class CoursesComponent{
title: String =" The title of courses page"
courses: String[];
constructor(courseService:CourseService){
this.courses = courseService.getCourses();
}
}