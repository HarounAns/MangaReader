## Manga Reader App - for Fanfics

Currently only has Dragonball AF, looking to add more manga soon, as well as move away from storing local copies and retrieving from cloud.

## Installation is easy.

Must have node/npm on machine

#### Steps:
```
git clone https://github.com/HarounAns/MangaReader.git
cd MangaReader
npm install
npm start
```

A window should open up on your default browser taking you to the app!


## To work on the app and customize
Open Manga Reader directory with visual studio code, or text editor of choice. The code for the application is available in the src folder. The main logic of the application is stored in the file App.js. 

App.js pulls different components, stored in the components folder, and brings them together in one place. You can go into the components and check the different ones out. There are four components used in my Manga Reader application. The navbar, the slider, the book select, and the paginator. 

### Navbar
The navbar is a simple component that allows the user to go back to the home screen after selecting which book they want to read.

### Slider
The pages slider, is the slider that allows users to read through the book. Its named a slider because the users can just scroll or slide down the application in order to get to the next pages. It uses a for loop to loop through the book and push images into the slider. These images are manga pages that the users read.

### Book Select
The book select uses a for loop to go through the book options (currently we have 2 books) and allows you to choose which one you want to read.

### Paginator
The paginator is by far the most complex piece, probably because I'm an idiot who could not come up with simpler logic to represent if there exists a next page or not. The paginator chooses the next volume of the book, so that when you click on whatever volume you want to go to, it takes you there. The high level is not complicated, but the implementation is unneccessarily complex because I'm dumb.

Sorry for not commenting my code. I can do that later if necessary
