import { Component, OnInit } from "@angular/core";
import { ListPicker } from "ui/list-picker";
import { Item } from "./item";
import { ItemService } from "./item.service";
import { RssService } from "./rss.service";
import { XmlParser } from 'tns-core-modules/xml';
import {Feed} from './feed';
import {Rss} from './rss';
@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    rss : Rss[];
    items: Item[];
    public feeds: Feed[] = [];
    public loading = "visible";
    selectedRss : Rss;

    constructor(private itemService: ItemService , private rssService : RssService) { 
       this.rss = [
           new Rss("NYTIME","http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"),
           new Rss("France24","http://www.france24.com/en/france/rss"),
           new Rss("SKYNEWS","http://feeds.skynews.com/feeds/rss/uk.xml")
       ];
    }

    ngOnInit(): void {
        this.getData(this.rss[0].link);
        console.log(">>>>>>>>>"+this.rss[0].link);
    }

    public selectedIndexChanged(args) {
        let picker = <ListPicker>args.object;
        console.log("------------- > Sectected index  " + picker.selectedIndex);

        this.selectedRss = this.rss[picker.selectedIndex];
        this.getData(this.rss[picker.selectedIndex].link);
    }

    private getData(link:string){
        this.rssService.getFeeds(link).subscribe(res => {
            console.log("response is here .................");
            console.debug(res);
            this.feeds = <Feed[]>res;
            this.loading = "collapse";
        });
    }
}
