export class Teacher {
    id:number;
    firstName:string;
    lastName:string;
    prefix:string;

    constructor(teacher:any) {
        this.id = teacher.id;
        this.firstName = teacher.firstName;
        this.lastName = teacher.lastName;
        this.prefix = teacher.prefix;
    }

    public html() {
        return `
        <div class="teacher-container">
        <img src="img/teacher2.jpg" class="teacher-picture" alt="teacher2"/>
        <p class="teacher-info">${this.prefix}. ${this.firstName} ${this.lastName}</p>
      </div>
      <div class="teacher-container">
        <img src="img/teacher3.jpg" class="teacher-picture" alt="teacher3"/>
        <p class="teacher-info">Teacher three</p>
      </div>
    </div>
        `
    }
}