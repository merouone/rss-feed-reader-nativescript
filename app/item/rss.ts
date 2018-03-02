export class Rss {


    public constructor(
                       public title : string,
                       public link :string ,
                      )
    {
        //
    }

    toString (){
        return this.title;
    }

}