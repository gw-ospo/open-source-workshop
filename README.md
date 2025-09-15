# OPEN SOURCE WORKSHOP
[GW OSPO](https://github.com/gw-ospo)'s reusable open source [collaborative art piece](https://gw-ospo.github.io/open-source-workshop)

## HOW TO CONTRIBUTE AN IMAGE
1. Create an image! It can be abstract patterns, self-portraits, botanicals, stick figures, photos, messages, and anything original you'd like to share.
2. Ensure your image is in a standard format such as jpg or png.  Take a photo or screenshot of your work if it is not already in a standard digitl format. (your phone will work just fine)
3. Click on the button that says "Fork" to create your own copy of this repository.
4. Click on the `YOUR_IMAGES_HERE` folder in the codebase, choose `Add File` in the top right corner, and upload your photo.
5. Click on "Pull requests" and then "New Pull Request"
6. As the "base repository", select `gw-ospo/open-source-workshop` and select `main` for the "base". As the "head repository", select "YOUR_USER_NAME/open-source-workshop" with `main` as the base. 
7. Open your pull request. Once we merge it, your image will join the collection. 

## HOW TO CONTRIBUTE CODE
This projection is a github pages site, brought to you by Jekyll and p5.js.
The fun stuff is in the `_includes` directory, particularly `Photo.js`, a class that handles animation and display of all the floating artwork.

To run locally, customize settings if needed in `_config.yml`, run `bundle install` to install ruby gems, and run `bundle exec jekyll serve` to launch in-browser.
