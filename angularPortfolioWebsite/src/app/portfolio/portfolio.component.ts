import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {


  projects = {} as Project[];
  filtering: boolean = false;
  isCollapsed: boolean = true;
  typescript : boolean = false;
  angular: boolean = false;
  python: boolean = false;
  java : boolean = false;


  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle("Dalton's Website - Portfolio");
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
    console.log(this.projects);
  }

  filter(){
    let filterTags: Tag[] = [];
    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }
    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.python){
      filterTags.push(Tag.PYTHON);
    }
    if(this.java){
      filterTags.push(Tag.JAVA);
    }
    if(this.angular || this.typescript || this.python || this.java){
      this.filtering = true;
    } else{
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters(){
    this.typescript = false;
    this.angular = false;
    this.python = false;
    this.java = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
