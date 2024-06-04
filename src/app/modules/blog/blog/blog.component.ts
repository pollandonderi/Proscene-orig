import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  
  blogs: any[] = []; // Initialize blogs with an empty array
  isModalOpen = false;
  selectedArticle: any;

  constructor(private service: BlogService) {}

  ngOnInit(): void {
    this.service.getblogs()
      .subscribe(response => {
        console.log(response.articles); // Ensure this prints an array of articles
        this.blogs = response.articles;
      });
  }

  openModal(article: any): void {
    this.selectedArticle = article;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
