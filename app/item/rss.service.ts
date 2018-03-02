import { Injectable } from "@angular/core";
import { Headers, RequestOptions, Http } from "@angular/http";
//import { XmlParser } from 'tns-core-modules/xml';
//import XmlObjects = require('nativescript-xmlobjects');
//import * as XmlObjects from "nativescript-xmlobjects";
import "rxjs/Rx";
import * as httpModule from "http";

@Injectable()
export class RssService {
    // converter to json 
    private generator = "http://merousoft.com/rss/index.php?url=";

    public constructor(private http : Http ){
        console.log("init Rss  Service ....");
    }

    public getFeeds(link:string){
        return this.http.get(this.generator + link).map((res) => {
            console.log(">>>>>>>>>>debuging mode<<<<<<<<<<<<");
            console.log( link );
            console.log(" response ");
            console.log(res);
            return res.json()
        });
    }

    public getFeeds_old(){
        let headers = new Headers();
        headers.set("Content-Type","application/xml");
        headers.set("Content-Encoding","UTF-8");
        let options = new RequestOptions({ headers: headers });

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

    }
    public getfeedDetails(link){
        //return this.http.get(link);
    }

}