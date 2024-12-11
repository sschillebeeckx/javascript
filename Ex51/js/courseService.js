import {Course} from "./course.js";

export class CourseService {

    constructor(){
        this.courseList=[
            new Course(1,"Javascript Programming", 3,570,"23/09/2004",false,["John", "An", "Bart"]),
            new Course(2,"Angular", 2,600,"20/11/2020",true,["Jean"]),
            new Course(3,"Spring APIs", 5,512.35,"09/02/2018",true,[ "An", "Jean"])

        ]
    }

    findCourseById(id){
        return this.courseList.find(x => x.id === id);
    }

    findCourseByTitle(title){
        return this.courseList.find(x => x.title.toLowerCase().includes(title.toLowerCase()));
    }

    addCourse(course){
        this.courseList.push(course);
    }

    findAllCourses(){
        return this.courseList;
    }
}