import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Angular Project", summary: "This is a test for my Angular Project", description: "This is a decription test for my Angular Project", projectLink: 'https://github.com/DaltonSchwanke/personal-website', tags: [Tag.ANGULAR, Tag.TYPESCRIPT], pictures: []},
    {id: 1, name: "Python Project", summary: "This is going to be a Python Project", description: "This is where the python project info will be", projectLink: '', tags: [Tag.PYTHON], pictures: []},
    {id: 2, name: "P5.js Project", summary: "This is a project that used P5.js", description: "The description will go here", projectLink: '', tags: [Tag.JAVA], pictures: []},
  ];

  constructor() { 
  }

  GetProjects(){
    return this.projects;
  }

  GetProjectID(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if(project === undefined){
      throw new TypeError('There is not project that matches this id ' + id );
    }

    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if(project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if(foundAll){
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }


}
