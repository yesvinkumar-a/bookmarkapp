# bookmarkapp
This simple application helps the users to add their favourite links for future reference.

## May 28, 2017 - Project Day 1 - Workspace Setup  ##

For this application, gulp.js is used as a task runner and bower as a package manager.
Bootstrap which is used as a frontend framework is also responsible for application look and feel.

Bootstrap-sass, a CSS-pre processor is also used in this application to customize the style.

For a beginner CLI users, follow the below steps

1. Install Node.js https://nodejs.org
2. Create a project folder
3. Download/fork the repository into the project folder.
4. Open terminal for Mac or cmd prompt for Windows
5. Type npm init and answer the series of questions to create a package.json file
6. Install gulp and bower by typing > npm install --save gulp bower
7. Install other development packages by typing > npm install --save-dev browser-sync del gulp-autoprefixer gulp-cache gulp-concat gulp-concat-css gulp-cssnano gulp-html-minifier gulp-htmlmin gulp-if gulp-imagemin gulp-sass gulp-sourcemaps gulp-uglify gulp-useref run-sequence minifyHTML
8. Type bower init to create bower.json
9. Install front-end packages by typing > bower install  --save-dev bootstrap bootstrap-sass font-awesome
10. Type 'gulp' to start the server or 'gulp build' to create a 'dist' folder


## May 29, 2017 - Project Day 2 - Page Setup  ##

Copy and replace the index.html to create a basic page.

## May 30, 2017 - Project Day 3 - Database Setup  ##

Create a mysql database and bookmarks_details table in your XAMPP or WAMP to store bookmark link and category
Find bookmark_list_db.txt for reference.

Insert few data's into the table to check everything works fine.

## May 31, 2017 - Project Day 4 - Retrieve Data from database  ##

To retrieve data we need bookmark_list.php file along with db.php to communicate with the server
Find the files in the folder called php-code

## June 01, 2017 - Project Day 5 - Insert Data to database  ##

Click on Add a New Link button to open a popup to add a new link
Add a new link and category fields and click submit.

Then, the typed data has been inserted in a bookmarks table.
