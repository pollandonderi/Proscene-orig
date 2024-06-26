import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  
  blogs: any[] = []; 
  isModalOpen = false;
  selectedArticle: any;

  constructor(private blogService: BlogService, private newsService: NewsService) {}

  ngOnInit(): void {
    this.blogService.getblogs().subscribe(blogResponse => {
      const blogArticles = blogResponse.articles;
  
      this.newsService.getnews().subscribe(newsResponse => {
        const newsArticles = newsResponse.articles;
  
        // Combine blog and news articles
        this.blogs = [...blogArticles, ...newsArticles];
      });
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
