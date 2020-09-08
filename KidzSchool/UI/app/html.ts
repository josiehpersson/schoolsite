import {Teacher} from './teacher';
import {SchoolClass} from './schoolClass';

export const displayTeachers = (teachers:Array<Teacher>):void => {
    const teachersElement = document.getElementById('teacher-container');
    console.log('displayTeachers');
    if(teachersElement !== null) {
        
        teachers.forEach((a:Teacher, idx:number) => {
            teachersElement.innerHTML += a.html();
        });
    }
}

export const displayClasses = (classes:Array<SchoolClass>):void => {
    const classesElement = document.getElementById('classes-container');
    if(classesElement !== null) {
        classes.forEach((a:SchoolClass, idx:number ) => {
            classesElement.innerHTML += a.html();
        });
    }
}