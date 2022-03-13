# Image_Processing_Api_Project :
*******************************


# Project overview:
-Image Processing API to resize images using sharp library Providing images in jpg format , a resize process has to be applied on them then storing them with filename ,
 width , height and format in public folder. 
                          
*********************************************************************************************************************************
 ### Additional Features added to the project : 

-Creating an front-end web application used for uploading images from local storage to fullsize directory
-creating a front-end gallery as well as a homepage for Api 
-connecting API homepage with gallery and upload Application . 
-Add additional processing to accept and output other image formats than JPG.
-Adding Image Rotation Process as an additional process than resizing 
-Modify the thumbnail filename to include the image size to allow for multiple sizes of the same image.

*********************************************************************************************************************************
# Tools : 
-Node Package Manager 'NPM'.
-TypeScript.
-Jasmine.
-Express.
-Sharp.
-Multer.
-FileSystem.

*********************************************************************************************************************************
# Starting Server 
 -for starting the server use command line :
  >> npm run build.
  >> npm run start.

*********************************************************************************************************************************
# EndPoints :
To use the server routes to reach our end point please visit :

>> HomePage >>                    http://localhost:3000/ 
>> Gallery >>                     http://localhost:3000/api/gallery
>> uploadPage >>                  http://localhost:3000/api/upload/
>> for image resizing  >>         http://localhost:3000/api/resize?filename=fjord&width=256&height=190  : as an example.
>> for image rotating 135 deg >>  http://localhost:3000/api/rotate?filename=fjord&width=100&height=250  : as an example.  

>> Note: Don't need to type url every single time of visiting as we can navigate through {home , upload , gallery} pages , 
     and for both resizing and rotating they will be saved in the public folder as :
>>>     (fjord-100x250.jpg) for resized image.  
>>>  && (fjord_100_250.jpg) for a rotated image.      

*********************************************************************************************************************************
# Versions  : 
Node version :    16.13.1
Jasmine version : 4.0.2

*********************************************************************************************************************************
# Install dependencies
1-  Add Node , NPM and their types
2-  Add TypeScript modules and type definitions 
3-  Add express and its definitions 
4-  add eslint
5-  add pretier and prettierrc
6-  add Jasmine / supersets 
7-  add sharp 
8-  add morgan 
9-  add dependencies to integrate prettier and Eslint
10- add nodeman 
11- add multer ...etc

*********************************************************************************************************************************
# Adding the required Scripts: 
1- add build script. 
2- add test script.
3- add start script for your server. 
4- add script for Eslint and Prettier.  

*********************************************************************************************************************************
#  Testing
-To start testing please use command line: 
>> npm run build.
>> npm run test.

    <<<<<< Testing Stategy  >>>>>>
1-Design test cases/suites/scenarios and writing test scripts in spec folder.
2-Applying Api Testing using POSTMAN for testing endpoints using postman and ensure as server and all routes are working successfully.
3-Applying Black-box technique in execution 
4-Applying White-box technique for testing the code structue and confirm statement coverage.
5-Applying functional and non-functional testing.
6-Applying positive and negative testing.

as well as I have only used automation unit testing with run of scripts but i have also used manual testing to test application features and code and testing stategy was to cover the following points  

     a-Ensure that a warning message like "The selected image cannot be uploaded. Only images with the extensions given in the help text are allowed" is displayed when we try to upload an image of format that is not supported. 
     b-Ensure that images of correct extension and size can be uploaded to the site.
     c-Ensure that user can edit/delete the uploaded image.
     d-Ensure that the image file viewed is the same as the one uploaded.
     f-Ensure that the uploaded image is not cropped off.
     e-Ensure that only images been accepted not an audio file or a video file.

     POSTMAN to check for api with api key-value + api response ( status code + response body + test result message ) 
        >>used postman to test all my APIs with the following scenario : 
            1- Method used : Get 
            2- Url : for my every endpoint for example checking my image resize api  ==> http://localhost:3000/api/resize? 
            3- Send a GET request 
            4- adding my Query parameters with their keys and values: 
                a-key:filename >> value= fjord
                b- key: width  >> value=200  
                c-key : height >> value=200
            5-then i get the response body with the resized image , status code : 200 Ok in  23ms and file size 7.14KB 
            and within the response header I had got all metadata of the image  
            6- when changing the query parameters i got a successfull response          

*********************************************************************************************************************************
# Linting :
>> use command line :
 -npm run lint

*********************************************************************************************************************************
# Prettier
 -npm run prettier

*********************************************************************************************************************************
# External sources used :
  Here is external resources helped me with the project :

1- sharp :                   https://www.digitalocean.com/community/tutorials/how-to-process-images-in-node-js-with-sharp
2- image-size :              https://www.npmjs.com/package/image-size  
3- multer :                  https://www.npmjs.com/package/multer  ,  
                             https://www.digitalocean.com/community/tutorials/express-file-uploads-with-multer
                             https://wardprice.medium.com/image-upload-with-node-js-and-typescript-c9e2ccec874b 
                             https://stackoverflow.com/questions/59097119/using-multer-diskstorage-with-typescript 
                             : to get callback and file types  
4-filesystem promises :      https://nodejs.org/dist/latest-v10.x/docs/api/fs.html    
5-Parsing images :           https://www.w3schools.com/jsref/jsref_parseint.asp#:~:text=The%20parseInt%20method%20parses%20a,   
                             %3D%20decimal%2C%2016%20%3D%20hexadecimal. 

 