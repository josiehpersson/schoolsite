const main = async () => {
    try {
            const api = await import('./api');
            const teacher = await api.getTeachers();
            const schoolClass = await api.getClasses();
            console.log(teacher, schoolClass);
            
            //const html = await import('./html');
            //html.displayTeachers(teacher.teachers);
            //html.displayClasses(schoolClass.classes);
        } 
    catch (e) {
        console.log(e);
    }
}
main();
