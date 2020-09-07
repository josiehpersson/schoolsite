export class SchoolClass {
    id:number;
    title:string;
    price:number;
    minAge:number;
    maxAge:number;
    description:string;
    time:number;
    date:number;

    constructor(schoolClass:any) {
        this.id = schoolClass.Id;
        this.title = schoolClass.title;
        this.price = schoolClass.price;
        this.minAge = schoolClass.minAge;
        this.maxAge = schoolClass.maxAge;
        this.description = schoolClass.description;
        this.time = schoolClass.time;
        this.date = schoolClass.date;
    }

    public html() {
        return `
        <div class="flex-container-class-card">
        <div class="contained-class-card">
        <div class="ClassCard">
          <img src="img/schoolchildren.jpg" alt="penna icon" class="classImg">
          <div class="classInfo">
            <div class="date-box-class-card">
              <p>${this.date}</p>
            </div>
            <h5>${this.title}</h5>
            <p><i class="fas fa-calendar-alt"></i> <b>Age ${this.minAge} to ${this.maxAge}  years</b></p>
            <p><i class="far fa-clock"></i> <b>${this.time} </b></p>
            <p><i class="fas fa-tag"></i><b>${this.price}</b></p>
            <p>${this.description} </p>
            <button type="button" class="btn btn-outline-light">Learn more</button>
          </div>
        </div>
      </div>

        `
    }
}

