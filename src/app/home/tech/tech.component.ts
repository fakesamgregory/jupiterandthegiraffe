import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-component',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent {
   technology = [
    { img: 'angular', title: 'Angular' },
    { img: 'react', title: 'React' },
    { img: 'wordpress', title: 'Wordpress' },
    { img: 'gulp', title: 'Gulp' },
    { img: 'webpack', title: 'Webpack' },
    { img: 'sass', title: 'SASS' },
    { img: 'js', title: 'JavaScript' },
    { img: 'html', title: 'HTML' },
    { img: 'css', title: 'CSS' }
  ];
}
