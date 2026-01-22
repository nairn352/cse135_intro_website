Username/Password Info for Logging into Website:
1) Username: neha, Password: nn2681
2) Username: grader, Password: nn$38973

Github-Deploy Setup: 
1) First, I created a new public repository in GitHub named "cse135_intro_website." 
2) Then, I used the following commands to push all my website files that I had created on my remote server to this repository:
    -git init
    -git add . 
    -git commit -m "some message here"
    -git remote add origin (https for repo)
    -git push
3) To deploy to DigitalOcean, I created an app on DigitalOcean. I connected this app to the GitHub repo I had just created. I selected the specific branch (master) to deploy. 
4) Finally, I checked the auto-deploy option so that any updates made to the repo would automatically result in a new deployment of the website on DigitalOcean. 
5) Static website was successfully deployed!