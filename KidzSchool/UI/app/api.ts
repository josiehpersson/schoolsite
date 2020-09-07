import {Teacher} from './teacher';
import {SchoolClass} from './schoolClass';
import {DbResult} from './dbResult';
import axios from "axios";

const baseUrl = 'http://localhost:4000/api/';

export const getTeachers = async () => {
    const teachers = await get('teachers');
    let result = new DbResult();

    teachers.forEach((a: any )=> result.teachers.push(new Teacher(a)));
}

export const getClasses = async () => {
    const classes = await get('classes');
    let result = new DbResult();
    classes.forEach((a: any) => result.schoolClasses.push(new SchoolClass(a)));
}

const get = async(uri:string) => {
    try {
        const result = axios.get('${baseUrl}${uri}');
        const {data} = await result;
        return data;
    }
    catch(err) {
        console.log(err);
    }
}