import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { Feed } from './feed';
import { EventData } from "data/observable";
import { openUrl } from "tns-core-modules/utils/utils";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    item: Item;
    feed : Feed ;
    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
    ) { 
        this.feed = new Feed(
                this.route.snapshot.params["category"],
                this.route.snapshot.params["title"],
                this.route.snapshot.params["description"],
                this.route.snapshot.params["link"],
                this.route.snapshot.params["date"],
                this.route.snapshot.params['content']
                );
    }

    ngOnInit(): void {
        
        //this.item = this.itemService.getItem(id);
    }

    open(args:EventData) : void{
        openUrl(this.feed.link);
    }
}
