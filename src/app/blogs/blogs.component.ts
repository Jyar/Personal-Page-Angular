import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { HttpService } from '../services/http.service';

import { NewsRss, IRssItem } from '../models/medium';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import * as xml2js from "xml2js";


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  animations: [
    trigger('enterTrigger', [
    state('fadeIn', style({
        opacity: '1'
    })),
    transition('void => *', [style({opacity: '0'}), animate('500ms')])
    ])
  ]
})
export class BlogsComponent implements OnInit {
   RssData: NewsRss;
   blogOne: IRssItem;
   blogOneContent: any;
   blogTwo: IRssItem;
   blogThree: IRssItem;
  constructor(private mediumService: HttpService) {
  }

 strip_tags(str: string) {
    return str.replace(/<\/?[^>]+>/gi, '');
}

  restrictTextLength(string: any){
    if (string === null || string === undefined) return '';
    let text = this.strip_tags(string[0]).substring(0, 250);

    return text + '...';
  }

  ngOnInit(): void {

    this.mediumService.GetRssFeedData().subscribe(data => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result: NewsRss) => {
          this.RssData = result;
        });

        this.blogOne = this.RssData.rss.channel[0].item[0];
        this.blogTwo = this.RssData.rss.channel[0].item[1];
        this.blogThree = this.RssData.rss.channel[0].item[2];
        // for (var j in channel)
          // let item = channel.item[0];
          // console.log(item.title);
          // console.log(item['content:encoded']);
          // var obj = JSON.parse(item);
          // let blog = [];
          // for(var i in obj)
          //     blog.push(obj[i]);
          // this.blogs.push(blog);
        
      });
  }

}

export interface IRssData {}
