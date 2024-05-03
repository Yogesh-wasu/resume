import {Component, Input, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnChanges {

  constructor() { }
  @Input() English: any;
 
  // TITLE 
  public headEnglish: any = { title: 'MY SKILLS', subtitle: 'SKILLS AND TOOLS' };
  public head: any = this.headEnglish;


  // ENGLISH
  public skill_1: any = [
    [{
      title: 'HTML5',
      progress: 100
    }],
    [{
      title: 'CSS3',
      progress: 95
    }],
    [{
      title: 'JavaScript',
      progress: 100
    }],
    [{
      title: 'Typescript',
      progress: 95
    }],
    [{
      title: 'Angular Material',
      progress: 90
    }],
    [{
      title: 'Angular 6 & 14',
      progress: 100
    }],
    [{
      title: 'Git',
      progress: 100
    }]
  ];

  public skill_2: any = [

    [{
      title: 'Node.js',
      progress: 95
    }],
    [{
      title: 'Express.js',
      progress: 90
    }]
  ];

  public skill_3: any = [

    [{
      title: 'MySQL',
      progress: 100
    }],
    [{
      title: 'Maria DB',
      progress: 95
    }]
  ];
  
  public skillEnglish: any = [
    { title: 'Client-Side', info: this.skill_1 },
    { title: 'Server-Side', info: this.skill_2 },
    { title: 'Data Base', info: this.skill_3 },
  ];
  // END ENGLISH


  // DEFAULT 
  public skills: any = this.skillEnglish;




  ngOnInit() {
  }

  ngOnChanges() {
      this.skills = this.skillEnglish;
      this.head = this.headEnglish;
  }


}
