import {Course} from "./course.js";

export class CourseList {

    static courseList =[
        new Course(1,"Javascript Programming", 3,570,"23/09/2004",false,["John", "An", "Bart"]),
        new Course(2,"Angular", 2,600,"20/12/2020",true,["Jean"]),
        new Course(3,"Spring APIs", 5,512.35,"09/02/2018",true,[ "An", "Jean"])

    ];

    constructor(){
        this.name="CourseList";
    }

     static findCourseById(id){
        console.log("in method, id="+id);
        return CourseList.courseList.find(x => x.id === id);
    }

    static findCourseByTitle(title){
        return CourseList.courseList.find(x => x.title.toLowerCase().includes(title.toLowerCase()));
    }

    static addCourse(course){
        CourseList.courseList.push(course);
    }

    static findAllCourses(){
        return CourseList.courseList;
    }
}