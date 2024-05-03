import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnChanges {
  @Input() English: any;

  public jobs: any = [
    {
      position: "Healthy Homes Quest Project",
      company: "Mumbai",
      period: "06/2023 - Present",
      description: "Responsible for front-end and database.\nApplied expertise in web development technologies, including Angular 14, Git, MySQL."
    },
    {
      position: "DBS Bank Project",
      company: "Mumbai",
      period: "12/2021 – 06/2023",
      description: "DBS is an International Banking System Where it manages various internal Modules like Email, LCC, Cash-ops and MIS.\nLed requirements gathering and documentation processes, ensuring a comprehensive understanding of project needs.\nDeveloped project design, planning, and estimation strategies, utilizing Agile methodologies for efficient execution.\nResponsible for end-to-end web development, covering web services, front-end, and database components.\nSuccessfully deployed and provided ongoing client support, ensuring a seamless user experience.\nDeveloped APIs for the front-end, adhering to Restful principles and ensuring security measures.\nPlayed a key role in the successful deployment of LCC and MIS modules, providing ongoing client support.\nUtilized expertise in Angular 6, Git, MariaDB, JavaScript, and Node.js for project implementation."
    },
    {
      position: "ICEICO TALENTCARE",
      company: "Nagpur",
      period: "05/2019 – 07/2019",
      description: "Web app using angular and back-end Using Node.js.\nWeb Application for Talent care."
    },
    {
      position: "Design and Development of IoT Based Smart Pet Feeder",
      company: "Nagpur",
      period: "01/2020",
      description: "IoT base Project.\nUsing this project, we can automatically provide water and food to pets."
    },
    {
      position: "Be Saved – Woman Safety Device",
      company: "Nagpur",
      period: "05/2019",
      description: "IoT base Project.\nUsing Arduino Software and IoT, I created a device for girls’ safety."
    }
  ];
  
  public headEnglish: any = { title: 'PROJECTS', subtitle: 'MY PROJECTS' };
  public head: any = this.headEnglish;

  constructor() {
  }



  ngOnInit() {
  }


  ngOnChanges() {
      this.head = this.headEnglish;
  }

}
