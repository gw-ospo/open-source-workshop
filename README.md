# OPEN SOURCE ART
GW OSPO's reusable open source collaborative art piece

## HOW TO CONTRIBUTE ART
1. Make some art! The OSCON has construction paper, pastels, and giant markers that you can use to create your masterpiece. That can be abstract patterns, self-portraits, botanicals, stick figures, messages, and anything else you'd like to share. If you'd like to share something you've already made, that's fine too.
2. Take a photo of your work (your phone will work just fine)
3. Select the photo_upload branch of this repository
4. Click on the `YOUR_FOLDER_HERE` folder in the codebase, choose `Add File` in the top right corner, and upload your photo.
5. Open a pull request to the `main` branch. Once we merge it, your art will join the projection. 

If you aren't sure how any of these steps work, ask an OSCON volunteer to show you.

## HOW TO CONTRIBUTE CODE
This projection is a github pages site, brought to you by Jekyll and p5.js.
The fun stuff is in the `_includes` directory, particularly `Photo.js`, a class that handles animation and display of all the floating artwork.

To run locally, customize settings if needed in `_config.yml`, run `bundle install` to install ruby gems, and run `bundle exec jekyll serve` to launch in-browser.