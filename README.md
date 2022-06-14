#Angular Router
This is the code repository for [Angular Router](https://www.packtpub.com/application-development/angular-router?utm_source=github&utm_medium=repository&utm_campaign=9781787288904), published by [Packt](https://www.packtpub.com/?utm_source=github). It contains all the supporting project files necessary to work through the book from start to finish.
## About the Book
Managing state transitions is one of the hardest parts of building applications. This is especially true on the web, where you also need to ensure that the state is reflected in the URL. In addition, you might want to split applications into multiple bundles and load them on demand. Doing this transparently isn’t easy. The Angular router solves these problems. Using the router, you can declaratively specify application states, manage state transitions while taking care of the URL, and load bundles on demand.
##Instructions and Navigation
All of the code is organized into folders. Each folder starts with a number followed by the application name. For example, Chapter02.



The code will look like the following:
```
@Component({
 template: `
 Edit
 `
})
class MessageCmp {
 public id: string;
 constructor(private route: ActivatedRoute) {
 route.params.subscribe(_ => this.id = _.id);
 }
}
```



##Related Products
* [AngularJS Testing Cookbook](https://www.packtpub.com/web-development/angularjs-testing-cookbook?utm_source=github&utm_medium=repository&utm_campaign=9781783983742)

* [Learning Angular 2 for .NET Developers](https://www.packtpub.com/web-development/learning-angular-2-net-developers?utm_source=github&utm_medium=repository&utm_campaign=9781785884283)

* [Switching to Angular 2](https://www.packtpub.com/web-development/switching-angular-2?utm_source=github&utm_medium=repository&utm_campaign=9781785886201)

###Suggestions and Feedback
[Click here](https://docs.google.com/forms/d/e/1FAIpQLSe5qwunkGf6PUvzPirPDtuy1Du5Rlzew23UBp2S-P3wB-GcwQ/viewform) if you have any feedback or suggestions.

