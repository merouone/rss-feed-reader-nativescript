"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
//import { XmlParser } from 'tns-core-modules/xml';
//import XmlObjects = require('nativescript-xmlobjects');
//import * as XmlObjects from "nativescript-xmlobjects";
require("rxjs/Rx");
var RssService = (function () {
    function RssService(http) {
        this.http = http;
        // converter to json 
        this.generator = "http://merousoft.com/rss/index.php?url=";
        console.log("init Rss  Service ....");
    }
    RssService.prototype.getFeeds = function (link) {
        return this.http.get(this.generator + link).map(function (res) {
            console.log(">>>>>>>>>>debuging mode<<<<<<<<<<<<");
            console.log(link);
            console.log(" response ");
            console.log(res);
            return res.json();
        });
    };
    RssService.prototype.getFeeds_old = function () {
        var headers = new http_1.Headers();
        headers.set("Content-Type", "application/xml");
        headers.set("Content-Encoding", "UTF-8");
        var options = new http_1.RequestOptions({ headers: headers });
        /*httpModule.getString(this.rss_link).then(res => {
            //console.debug(res);
            let doc = XmlObjects.parse(res);
            var rootElement = doc.root;

           let channel = rootElement.element("channel");
           console.log(channel.document);
         
           

            // XElement[]
            var allChildElements = rootElement.elements();
            console.log(allChildElements);
            // XNode[]
            // var allNodes = rootElement.nodes();
            // for (var i = 0; i < allNodes.length; i++) {
            //     var n = allNodes[i];
            //     if (n instanceof XmlObjects.XElement) {
            //         console.log(n.name);
            //     }
            // }

        });*/
    };
    RssService.prototype.getfeedDetails = function (link) {
        //return this.http.get(link);
    };
    return RssService;
}());
RssService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RssService);
exports.RssService = RssService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyc3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBOEQ7QUFDOUQsbURBQW1EO0FBQ25ELHlEQUF5RDtBQUN6RCx3REFBd0Q7QUFDeEQsbUJBQWlCO0FBSWpCLElBQWEsVUFBVTtJQUluQixvQkFBMkIsSUFBVztRQUFYLFNBQUksR0FBSixJQUFJLENBQU87UUFIdEMscUJBQXFCO1FBQ2IsY0FBUyxHQUFHLHlDQUF5QyxDQUFDO1FBRzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sNkJBQVEsR0FBZixVQUFnQixJQUFXO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUc7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFFLENBQUM7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0saUNBQVksR0FBbkI7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUV2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQXNCSztJQUVULENBQUM7SUFDTSxtQ0FBYyxHQUFyQixVQUFzQixJQUFJO1FBQ3RCLDZCQUE2QjtJQUNqQyxDQUFDO0lBRUwsaUJBQUM7QUFBRCxDQUFDLEFBckRELElBcURDO0FBckRZLFVBQVU7SUFEdEIsaUJBQVUsRUFBRTtxQ0FLeUIsV0FBSTtHQUo3QixVQUFVLENBcUR0QjtBQXJEWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIEh0dHAgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuLy9pbXBvcnQgeyBYbWxQYXJzZXIgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3htbCc7XG4vL2ltcG9ydCBYbWxPYmplY3RzID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXhtbG9iamVjdHMnKTtcbi8vaW1wb3J0ICogYXMgWG1sT2JqZWN0cyBmcm9tIFwibmF0aXZlc2NyaXB0LXhtbG9iamVjdHNcIjtcbmltcG9ydCBcInJ4anMvUnhcIjtcbmltcG9ydCAqIGFzIGh0dHBNb2R1bGUgZnJvbSBcImh0dHBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJzc1NlcnZpY2Uge1xuICAgIC8vIGNvbnZlcnRlciB0byBqc29uIFxuICAgIHByaXZhdGUgZ2VuZXJhdG9yID0gXCJodHRwOi8vbWVyb3Vzb2Z0LmNvbS9yc3MvaW5kZXgucGhwP3VybD1cIjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHAgOiBIdHRwICl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdCBSc3MgIFNlcnZpY2UgLi4uLlwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RmVlZHMobGluazpzdHJpbmcpe1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmdlbmVyYXRvciArIGxpbmspLm1hcCgocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj4+Pj4+Pj4+Pj5kZWJ1Z2luZyBtb2RlPDw8PDw8PDw8PDw8XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coIGxpbmsgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIHJlc3BvbnNlIFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RmVlZHNfb2xkKCl7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIixcImFwcGxpY2F0aW9uL3htbFwiKTtcbiAgICAgICAgaGVhZGVycy5zZXQoXCJDb250ZW50LUVuY29kaW5nXCIsXCJVVEYtOFwiKTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuXG4gICAgICAgIC8qaHR0cE1vZHVsZS5nZXRTdHJpbmcodGhpcy5yc3NfbGluaykudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmRlYnVnKHJlcyk7XG4gICAgICAgICAgICBsZXQgZG9jID0gWG1sT2JqZWN0cy5wYXJzZShyZXMpO1xuICAgICAgICAgICAgdmFyIHJvb3RFbGVtZW50ID0gZG9jLnJvb3Q7XG5cbiAgICAgICAgICAgbGV0IGNoYW5uZWwgPSByb290RWxlbWVudC5lbGVtZW50KFwiY2hhbm5lbFwiKTtcbiAgICAgICAgICAgY29uc29sZS5sb2coY2hhbm5lbC5kb2N1bWVudCk7XG4gICAgICAgICBcbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vIFhFbGVtZW50W11cbiAgICAgICAgICAgIHZhciBhbGxDaGlsZEVsZW1lbnRzID0gcm9vdEVsZW1lbnQuZWxlbWVudHMoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFsbENoaWxkRWxlbWVudHMpO1xuICAgICAgICAgICAgLy8gWE5vZGVbXVxuICAgICAgICAgICAgLy8gdmFyIGFsbE5vZGVzID0gcm9vdEVsZW1lbnQubm9kZXMoKTtcbiAgICAgICAgICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vICAgICB2YXIgbiA9IGFsbE5vZGVzW2ldO1xuICAgICAgICAgICAgLy8gICAgIGlmIChuIGluc3RhbmNlb2YgWG1sT2JqZWN0cy5YRWxlbWVudCkge1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhuLm5hbWUpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICB9KTsqL1xuXG4gICAgfVxuICAgIHB1YmxpYyBnZXRmZWVkRGV0YWlscyhsaW5rKXtcbiAgICAgICAgLy9yZXR1cm4gdGhpcy5odHRwLmdldChsaW5rKTtcbiAgICB9XG5cbn0iXX0=