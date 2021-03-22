# marketune_test

**test description**:  
The task consists of the following  
1 - consume an API that returns a set of 10000 documents.
2- The returned documents represent the users activities on an ads sharing platform, the posts to be shared have goals like click and share, the users themselves can have tasks like share on different social media platforms, all sort of user activites are at the field 'goal_types' in the returned documents (note: it can be goal_type or goal.goal_type in some documents).  
3- Most important data to visualize is points_in/post, points_in/user,  goal_types/post, user_hits/day, hit_types/post, and all the graphs should have some sort of data control over the visualized data (createdAt field in all the documents)
4- json object fields that can exist in documents 
* _id  
* goal
* goal_type
* status
* userid
* corpid
* createdAt

**Please follow the following steps** :  
1 - clone this repository  
2 - create a branch and let its name be your email address or whatsapp number  
3 - make a pull request with your branch  
4 - if you could deploy your code at any static content free host like 000webhost add the link to your hosted solution in the reamde file in  your branch  
5 - if you find any problems or need any help, send an email with the title "data-visualization-test" to freelancers@marketune.com and include your branch name in the email in case you made the pull request

### APIs to use
*the data returned by these apis might be helpful along with the 'createdAt' field in the documents returned by the getData endpoint*
----  
#### path
https://marketune-visualization-test.herokuapp.com/getData  
#### method  
`get`  

#### *_response*  
10,000 documents  represeting user activities in an ads sharing platform  
----  
### visit the following urls to see their json response objects in your browser:  
* https://marketune-visualization-test.herokuapp.com/counts
* https://marketune-visualization-test.herokuapp.com/points_in
* https://marketune-visualization-test.herokuapp.com/status

