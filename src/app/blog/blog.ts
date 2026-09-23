import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { Component } from '@angular/core';
import { AllArticles } from '../all-articles/all-articles';

@Component({
  selector: 'app-blog',
  imports: [AllArticles, RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

}
