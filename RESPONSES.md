1. Please respond to the questions below in reference to Task 1.
   1. In a few sentences, please describe how you completed this task.
      > First I wanted to get a basic understanding of how the app was working. I started in the app.js to see how state was handled, css, and how props were passed to components. One of the first things I wasnt sure of was usestate, so I looked that up.  I also looked up some info on JSS and clsx since I was unfamilar with them. After getting a basic understanding, I took a look at the ApprovalList.js. From there I was able to understand how I needed to set everything up in ApprovalView.js. Then I separated my task into chucks, first using clsx to get the correct color on the top banner, then expanding on that process to get the correct styles for the list of approvers for each approval (also using map like in approvalList to iterate over the approvers), next formatting and validating the time requested and submitted, and finally apply styling and testing.
   2. About how long did this task take you to complete? Was this longer or shorter than you initially expected?
      > This took a few hours, mainly because of all the research I was doing. It took about as long as I expected. I knew once I had the basic understanding down, I would be able to complete the actual task pretty quickly.
   3. Given more time, is there anything you would done differently?
      > One thing I would have like to spend more time on was playing around with the nested styles and themes. Then I would be able to remove some lines of code by adding the accepted/rejected styling to the top level div and combining badgeClassName and badgeIconName classes.
2. Please respond to the questions below in reference to Task 2.
   1. In a few sentences, please describe how you completed this task.
      > I used the usestate hook that was already set up in the app.js. I changed the state  for selectedIndex with the function setSelectedIndex. I just needed to pass setSelectedIndex to ApprovalList as a prop and once that is done, use the onclick handler to call setSelectedIndex and update selectedIndex
   2. About how long did this task take you to complete? Was this longer or shorter than you initially expected?
      > This was pretty quick to do.  It took less than half an hour.  I already had an idea how to do it from doing my initial research. It took around the time I expected it to.
   3. Given more time, is there anything you would done differently?
      > I dont think so. This was a pretty simple task.
3. Please respond to the questions below in reference to Task 3.
   1. In a few sentences, please describe how you completed this task.
      > I created a test "newApproval" object in AddApproval so that I could focus on figuring out how I was going to determine the overall status, approver status validating, time validation, input error handling, and how to actually set the approval. So once I was able to set an approval and see it show up in the approval view, I added on the additional tasks from there.  First I check to see if each approval status is one of the three options, then I check if the dates for requested and submitted are valid, if those conditions are met then I check the approvals overall status, add it to the approval object and then finally set the new approval. I decided to use moment.js to validate the time and make sure it was submitted in proper format. after accomplishing all the tasks with my test "newApproval" object, I started working on the form. I split the string submitted from the textarea and added it so my new approval object. Once I was able to create my newApproval from the submitted textArea, I was done because I already figured out what to do with it.
   2. About how long did this task take you to complete? Was this longer or shorter than you initially expected?
      > This task took the longest.  I think it took around 4 hours total (maybe more) I worked on it incrementally all day.  It took a little longer than I was expecting, but I knew it would take the longest out of the tasks.
   3. Given more time, is there anything you would done differently?
      > I would have cleared the textArea and the errors, in between submitting approvals.
4. Please briefly describe how you would define and implement an integration test for the following user-flows.
   1. A user attempts to submit an approval with syntax errors.
      > An integration test for this user-flow would have to insure that addApproval and addApprovalError components are communicating properly to each other. I would come up with more test case scenarios to try to get syntax errors when inputing approvals and make sure error messages are showing up appropriately;
   2. A user submits an approval with no syntax errors.
      > An integration test for this user-flow would have to insure that addApproval and approvalList, and ApprovalView components are communicating properly to each other. To test this I would come up with more test cases. For example, if an approval was submitted, you should make sure that the status is showing correctly in the appovalList and approvalView.
5. About how long did it take you to complete these responses?
   > I tried to do these responses as I was completing the tasks, so Im thinking total it probably took an hour.
