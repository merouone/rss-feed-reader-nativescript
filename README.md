# NativeScript Angular Feednews mobile application

A small application for testing Nativescript crossplatform framework .
This application collects feed news from a selected website and displays its news  to the user,
We are using a middleware website to convert XML format to JSON which does not require
lot of CPU processing (the parsing is done in the server side) which good for battery consumption  .


Demo: 
![alt text](./images/img2.png) 





clone the application 


```
git clone https://github.com/merouone/rss-feed-reader-nativescript.git
cd to the directory
```

cd rss-feed-reader-nativescript

Install dependencies 
```
npm install 
```
Add the platform of choice 
```
tns platform add android
tns platform add ios
```

Run the application with ios emulator depending on your platform
```
tns run ios --emulator
tns run android --emulator
```


Debug the application 
```
tns debug ios
```
