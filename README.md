# bookmarkapp
This application helps the users to add their favourite links for future reference.

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

Copy and paste the below code in your index.html to create a basic page.

<pre><code>
<div class="container">
  <div class="row">
    <h3>My List</h3>
    <div class="list-group" id="bookmarkList">
      <a href="http://google.com" target="_blank" class="list-group-item">
        <h4 class="list-group-item-heading">http://google.com</h4>
        <p class="list-group-item-text">Search Engine</p>
      </a>
      <a href="http://www.w3schools.com/" target="_blank" class="list-group-item">
        <h4 class="list-group-item-heading">http://www.w3schools.com/</h4>
        <p class="list-group-item-text">Training</p>
      </a>
    </div>

    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
      Add a New Link
    </button>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Bookmark Details</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Bookmark Link</label>
                <input type="link" class="form-control" id="link" placeholder="link">
              </div>
              <div class="form-group">
                <label for="category">Category</label>
                <input type="text" class="form-control" id="category" placeholder="Category">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</code></pre>
