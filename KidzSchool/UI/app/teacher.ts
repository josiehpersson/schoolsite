export class Teacher {
    id:number;
    firstName:string;
    lastName:string;
    prefix:string;

    constructor(teacher:any) {
        this.id = teacher.Id;
        this.firstName = teacher.FirstName;
        this.lastName = teacher.LastName;
        this.prefix = teacher.Prefix;
    }

    public html() {
        return `
        <div class="teacher-container">
        <img src="img/teacher2.jpg" class="teacher-picture" alt="teacher2"/>
        <p class="teacher-info">${this.prefix}. ${this.firstName} ${this.lastName}</p>
      </div>
        `
    }
}