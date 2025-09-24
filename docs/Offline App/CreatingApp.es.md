App description Common JS Functions Creating App Design Environment Designing App Navigation Options Return Data Process Useful Tokens Tracking Configuration Database Debugging App/Emulator differences Offline AI

# Creating **flexygo** Offline App

Click on the **New App** option, then we will fill in and save the associated information.

#### Descriptive information:

*   APP name
*   Title
*   Icon associated with the application.

#### Functional information:

*   Active Check or not (activate and deactivate the app)
*   Address for the Apk (only informative)
*   Web service address (only informative)

#### Synchronization information:

*   Return Data Process: where we will specify the process that will be executed after sending data from the device to the customer's data model. This process is therefore responsible for the insertion / deletion / updating of data.
*   The process, with only 1 automatic param **@JSONVALUE**, contains all the device tables:
    

![Face Recognition settings](./img/Help/offline/create1.png "Image 1. Create Offline App")

Image 1. Create Offline App

![Face Recognition settings](./img/Help/offline/AppOfflineSave.png "Image 2. Create Offline App")

Image 2. Create Offline App

You can obtain more informatión on how the return process works clicking on the following link Return Data Process