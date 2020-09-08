export class SchoolClass {
    id:number;
    title:string;
    price:number;
    minAge:number;
    maxAge:number;
    description:string;
    time:string;
    date:Date;

    constructor(schoolClass:any) {
        this.id = schoolClass.Id;
        this.title = schoolClass.Title;
        this.price = schoolClass.Price;
        this.minAge = schoolClass.MinAge;
        this.maxAge = schoolClass.MaxAge;
        this.description = schoolClass.Description;
        this.time = schoolClass.Time;
        this.date = schoolClass.Date;
    }

    public html() {
        return `
        <div class="ClassCard">
          <img src="img/schoolchildren.jpg" alt="penna icon" class="classImg">
        <div class="classInfo">
          <div class="date-box-class-card">
            <p>${this.date}</p>
          </div>
            <h5>${this.title}</h5>
            <p><i class="fas fa-calendar-alt"></i> <b>${this.minAge} to ${this.maxAge} years</b></p>
            <p><i class="far fa-clock"></i> <b>${this.time}</b></p>
            <p>${this.description}</p>
            <button type="button" class="btn btn-outline-light">Learn more</button>
        </div>
      </div>
        `
    }
}

