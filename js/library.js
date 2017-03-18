(function () {
  var app = angular.module('libraryApp', []);
  app.controller('LibraryController', function () {
    this.books = books;
  });

  var books = [
    {title: 'Git @ Code School', description: 'Learn Git in CodeSchool', url:'http://campus.codeschool.com'},
    {title: 'Angular @ Code School', description: 'Learn Angular in CodeSchool', url:'http://campus.codeschool.com/courses/shaping-up-with-angular-js'},
    {title: 'MVA', description: 'Microsoft Virtual Academy', url:'http://mva.microsoft.com'},
    {title: 'W3Schools', description: 'Learn web development online', url:'https://www.w3schools.com'},
    {title: 'SitePoint', description: 'Learn easily in sitepoint', url:'https://www.sitepoint.com/'}
  ];

})();
