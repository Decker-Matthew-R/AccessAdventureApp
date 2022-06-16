# **AccessAdventureApp**
#### SWE6733 - Emerging Software Engineering Processes - Dr. Reza Parizi

#### **Group 2:**  
Team Role: Matt Decker  
Team Role: Ifeanyi Okoye  
Team Role: Devika Kandel Neupane  
Team Role: Cameron Mitchel Page  
 
This .md file contains all the information needed to set up your development environment. The steps listed below were all done on a PC using Windows 10 Home.
  
#### --Setting Up Git/Github--
##### --This step will be essential in allowing us to collaborate and revert to past iterations of our app should we encounter problems--
  
  1. Create a github profile at [github.com](https://github.com/)
     - After creating a github profile, accept the invitation to join this repo.
  2. Next we need to ensure that we have git downloaded. 
     - You can check if you already have git downloaded by typeing git --version in the command prompt.
     - If git is already downloaded, type git update-git-for-windows into the command prompt to ensure you have the most up to date version.
  3. If you do not have git already installed, go to https://git-scm.com/download/win and download the git installer you need.
     - After installing git, verify it is installed by typing git --version in the command prompt.
  4. You should now be good to use git and github    
  
#### --Download NVM(Node Version Manager)--
##### --This will assist you in downloading the most recent version of node and npm.--

  1. To check if you have nvm installed, type nvm -v into the command prompt
     -  If you already have node downloaded, type nvm install latest into the command line.
     -  Also check that you have node.js installed by typing node -v into the command line.
     -  Also check that you have npm installed by typing npm -v into the command line.
     -  Type npm install latest into the command line to update npm.
     -  If you have all of them and they are up to date, you can proceed to the next section.
  2. If you need to install nvm, go to https://github.com/coreybutler/nvm-windows/releases and download the latest version for your PC.
     -  You will find the most recent version under "Assets" and will look for the file called "nvm-setup.zip from the most recent date.
     -  Follow the prompts located on the screen to install nvm. 
     -  After nvm is installed, circle back to the sub steps located under step 1 to ensure everything is downloaded and updated.
  
#### --Download Android Studio--
##### --Android Studio is the IDE we will be working with for this project. It has a built in emulator that will allow us to test apps without and android phone.--
  1. Go to https://developer.android.com/studio
  2. Select the download you need for your device.
  3. See the following webpage for how to set up Android Studio for React Native and your emulator https://levelup.gitconnected.com/android-react-native-window-setup-how-to-setup-android-environment-for-react-native-app-588aaa13c3a6
  4. To set up the Android Emulator, see the above link.
 
#### --Download Expo CLI--
##### --This will allow us to download Expo CLI. This will allow us to run the project server and open the emulator--  
  1. Type npm install npm install expo-cli --global into command line. This will install Expo CLI
 
#### --Clone Git Repo--
##### --This will allow you to access the git repo from a local source--   

#### --Git Commands/Setting Up a Branch--
##### --This will allow you to use git through command line and set up a remote branch to work from--  




The following resources helped me to set up the development environment. Please refer to them or reach out to me if you have any trouble setting up the environment.   

https://reactnative.dev/docs/environment-setup#:~:text=You%20will%20need%20Node%2C%20the,React%20Native%20app%20for%20Android.   
https://code.tutsplus.com/tutorials/how-to-create-a-react-native-android-app--cms-35636   
https://levelup.gitconnected.com/android-react-native-window-setup-how-to-setup-android-environment-for-react-native-app-588aaa13c3a6
