# Placement cell



A company constantly needs to download their data to compile different reports. You need to create an
interface for the employees of this company to fill in the data into the database and then download it in CSV
format.
Create a complete web application, not an API
If you don’t know what’s a CSV, google it.


# Task
+ Team Career Camp wants to maintain a database of all the student interviews [only for their own use], for this they store the following details:
    + Batch
    + Student Details (including college, status: [placed, not_placed])
    + Course Scores (including DSA Final Score, WebD Final Score, React Final Score)
    + Interviews (including company name and Date)
    + Results (this is a mapping between company, and student, contains result: [PASS, FAIL, On Hold, Didn’t Attempt])

# Pages
+ Sign Up and Sign In only for employees
+ List of students + add new student (this is similar to adding and viewing posts in codeial)
+ List of Interviews + form to create an interview (with date)
+ Allocate a student to an interview
+ Select an interview to view the list of all students and mark a result status from the list page itself

# [BONUS FEATURE] External Jobs List:
+ Create a page which fetches real available jobs in India for react/node.js. Find and
use open APIs [example: https://jobs.github.com/api, find at least one more, you can cheat!]
+ The API request should be handled from your node.js server
+ The design of this page should be minimalistic
+ Link to apply would be an external link, so don’t worry about creating
models/controllers/views for any part on this page
+ Download a complete CSV of all the data with the following columns:
+ Student id, student name, student college, student status, DSA Final Score, WebD Final
Score, React Final Score, interview date, interview company, interview student result
+ A student can have multiple entries based on the interviews she/he has given.

# Submission
+ Create a github repo and add all the code
+ Add a README.md file with the following details:
+ How to run the project
+ How to run the tests
+ Any other information you want to add
+ Add a link to the hosted project on heroku