"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var rss_service_1 = require("./rss.service");
var rss_1 = require("./rss");
var ItemsComponent = (function () {
    function ItemsComponent(itemService, rssService) {
        this.itemService = itemService;
        this.rssService = rssService;
        this.feeds = [];
        this.loading = "visible";
        this.rss = [
            new rss_1.Rss("NYTIME", "http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"),
            new rss_1.Rss("France24", "http://www.france24.com/en/france/rss"),
            new rss_1.Rss("SKYNEWS", "http://feeds.skynews.com/feeds/rss/uk.xml")
        ];
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.getData(this.rss[0].link);
        console.log(">>>>>>>>>" + this.rss[0].link);
    };
    ItemsComponent.prototype.selectedIndexChanged = function (args) {
        var picker = args.object;
        console.log("------------- > Sectected index  " + picker.selectedIndex);
        this.selectedRss = this.rss[picker.selectedIndex];
        this.getData(this.rss[picker.selectedIndex].link);
    };
    ItemsComponent.prototype.getData = function (link) {
        var _this = this;
        this.rssService.getFeeds(link).subscribe(function (res) {
            console.log("response is here .................");
            console.debug(res);
            _this.feeds = res;
            _this.loading = "collapse";
        });
    };
    return ItemsComponent;
}());
ItemsComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./items.component.html"
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService, rss_service_1.RssService])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUM3Qyw2Q0FBMkM7QUFHM0MsNkJBQTBCO0FBTTFCLElBQWEsY0FBYztJQU92Qix3QkFBb0IsV0FBd0IsRUFBVyxVQUF1QjtRQUExRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFXLGVBQVUsR0FBVixVQUFVLENBQWE7UUFKdkUsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixZQUFPLEdBQUcsU0FBUyxDQUFDO1FBSXhCLElBQUksQ0FBQyxHQUFHLEdBQUc7WUFDUCxJQUFJLFNBQUcsQ0FBQyxRQUFRLEVBQUMsMERBQTBELENBQUM7WUFDNUUsSUFBSSxTQUFHLENBQUMsVUFBVSxFQUFDLHVDQUF1QyxDQUFDO1lBQzNELElBQUksU0FBRyxDQUFDLFNBQVMsRUFBQywyQ0FBMkMsQ0FBQztTQUNqRSxDQUFDO0lBQ0wsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sNkNBQW9CLEdBQTNCLFVBQTRCLElBQUk7UUFDNUIsSUFBSSxNQUFNLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV4RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVPLGdDQUFPLEdBQWYsVUFBZ0IsSUFBVztRQUEzQixpQkFPQztRQU5HLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLEtBQUssR0FBVyxHQUFHLENBQUM7WUFDekIsS0FBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDO0FBcENZLGNBQWM7SUFMMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsd0JBQXdCO0tBQ3hDLENBQUM7cUNBUW1DLDBCQUFXLEVBQXdCLHdCQUFVO0dBUHJFLGNBQWMsQ0FvQzFCO0FBcENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gXCJ1aS9saXN0LXBpY2tlclwiO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSc3NTZXJ2aWNlIH0gZnJvbSBcIi4vcnNzLnNlcnZpY2VcIjtcbmltcG9ydCB7IFhtbFBhcnNlciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMveG1sJztcbmltcG9ydCB7RmVlZH0gZnJvbSAnLi9mZWVkJztcbmltcG9ydCB7UnNzfSBmcm9tICcuL3Jzcyc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICByc3MgOiBSc3NbXTtcbiAgICBpdGVtczogSXRlbVtdO1xuICAgIHB1YmxpYyBmZWVkczogRmVlZFtdID0gW107XG4gICAgcHVibGljIGxvYWRpbmcgPSBcInZpc2libGVcIjtcbiAgICBzZWxlY3RlZFJzcyA6IFJzcztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlICwgcHJpdmF0ZSByc3NTZXJ2aWNlIDogUnNzU2VydmljZSkgeyBcbiAgICAgICB0aGlzLnJzcyA9IFtcbiAgICAgICAgICAgbmV3IFJzcyhcIk5ZVElNRVwiLFwiaHR0cDovL3Jzcy5ueXRpbWVzLmNvbS9zZXJ2aWNlcy94bWwvcnNzL255dC9Ib21lUGFnZS54bWxcIiksXG4gICAgICAgICAgIG5ldyBSc3MoXCJGcmFuY2UyNFwiLFwiaHR0cDovL3d3dy5mcmFuY2UyNC5jb20vZW4vZnJhbmNlL3Jzc1wiKSxcbiAgICAgICAgICAgbmV3IFJzcyhcIlNLWU5FV1NcIixcImh0dHA6Ly9mZWVkcy5za3luZXdzLmNvbS9mZWVkcy9yc3MvdWsueG1sXCIpXG4gICAgICAgXTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nZXREYXRhKHRoaXMucnNzWzBdLmxpbmspO1xuICAgICAgICBjb25zb2xlLmxvZyhcIj4+Pj4+Pj4+PlwiK3RoaXMucnNzWzBdLmxpbmspO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzKSB7XG4gICAgICAgIGxldCBwaWNrZXIgPSA8TGlzdFBpY2tlcj5hcmdzLm9iamVjdDtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tID4gU2VjdGVjdGVkIGluZGV4ICBcIiArIHBpY2tlci5zZWxlY3RlZEluZGV4KTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkUnNzID0gdGhpcy5yc3NbcGlja2VyLnNlbGVjdGVkSW5kZXhdO1xuICAgICAgICB0aGlzLmdldERhdGEodGhpcy5yc3NbcGlja2VyLnNlbGVjdGVkSW5kZXhdLmxpbmspO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RGF0YShsaW5rOnN0cmluZyl7XG4gICAgICAgIHRoaXMucnNzU2VydmljZS5nZXRGZWVkcyhsaW5rKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2UgaXMgaGVyZSAuLi4uLi4uLi4uLi4uLi4uLlwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcocmVzKTtcbiAgICAgICAgICAgIHRoaXMuZmVlZHMgPSA8RmVlZFtdPnJlcztcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IFwiY29sbGFwc2VcIjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19