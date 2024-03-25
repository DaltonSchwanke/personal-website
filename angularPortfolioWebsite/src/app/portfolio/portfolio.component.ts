import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  projects: Project[] = [
    {id: 0, name: "Angular Project", summary: "This is a test for my Angular Project", description: "This is a decription test for my Angular Project", projectLink: '', tags: [Tag.ANGULAR, Tag.TYPESCRIPT], pictures: []},
    {id: 1, name: "Python Project", summary: "This is going to be a Python Project", description: "This is where the python project info will be", projectLink: '', tags: [Tag.PYTHON], pictures: []},
    {id: 2, name: "P5.js Project", summary: "This is a project that used P5.js", description: "The description will go here", projectLink: '', tags: [Tag.JAVA], pictures: []},
  ];

  constructor(private titleService: Title){
    this.titleService.setTitle("Dalton's Website - Portfolio");
  }
}
