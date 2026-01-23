Team Member(s): Neha Nair

SSH Key:***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

SSH Passphrase: nn$38973

Password for grader account: nn$38973

Link to cse135intro.site: https://cse135intro.site/

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
5) Static website was successfully deployed (https://orca-app-mf4nt.ondigitalocean.app/)!

Username/Password Info for Logging into Website:
1) Username: neha, Password: nn2681
2) Username: grader, Password: nn$38973

Changes to HTML file in DevTools after compression: 
    After compression, when I go to the "Network" section in DevTools, press on my HTML file, and check the "Response Headers" section in the "Header" tab, I see that "Content-Encoding" is set to gzip. In addition, if I hover over the size shown for my HTML file, I notice that the "transferred size" is smaller than the "resource size" for the file. This also indicates that the file has been compressed. 

Obscuring Server Identity / Removing "server" header:
    First, I installed and configured libapache2-mod-security2 (mod_security), which is an open-source Web Application Firewall module for Apache. Then, I configured Apache's ServerTokens directive by editing Apache's configuration file to set "ServerTokens" to "Full." I located the ModSecurity configuration file and added the "SecServerSignature" directive with "CSE135 Server." Finally, I restarted Apache and when I reloaded my webpage, "Server" in the "Response Headers" section of my DevTools had changed to "CSE135 Server," as desired. 
