# In-School Workshop Builder

## Goals
* Recreate my company website: 
[Engineering Outreach](http://outreach.engineering.utoronto.ca/) 
* Our organization runs a program called In-School Workshops which allow TDSB teachers to request engineering undergraduate instructors to come to their classroom and deliver a hands-on engineering activities.
* The app would allow TDSB teachers to easily sort through our In-School Workshop Brochure and select a workshop that works best for their class.
* Once the teacher finds the workshops, they will be able to login to their TDSB account and request the workshops, dates, and times for the program.
* When the request is made, it will create a templated email that will be sent to the admins

## User Flow
1. Users will create an account and answer questions about their classroom
    - First Name
    - Last Name
    - Email (TDSB isnot necessary but can be a form of authentication)
    - What school do you teach at
    - What grade groups do you teach?

2. Selecting Workshops and the filter
    - Users will be asked a series of questions to help filter out the courses available to them.

3. The page will be populated with all the workshops but there will be a prompt for the user to list the criteria. 
    - As they user is filling out information, the workshops in the background will start to update. I will likely use react.js to do this portion
    - Users can then click on the workshops and a module will open with details on the workshop and some pictures. There will also be an option to "add workshop to cart"

4. Once the user adds to cart and is ready to check out they can proceed to the booking request.
    - Question will be asked of the user such as school contact information, names of the teachers, number of students, and grade you are requesting a workshop for
    - Selecting dates with optional dates.
    - This answers will then create a templated email. Will require the read and write node modules to create a PDF and send it to the email

5. Add resources in the admin tool to show dates and times theyre available

6. Take the Dominic out of the tool
    - Giving understandable information so the system can handle the requests
    - Think about the resources that are available and admin allocating them


## Resources


[In-School Workshops Brochure](http://outreach.engineering.utoronto.ca/files/2018/03/ISW-Final-March-25-2018.pdf) 

[YMCA Camp Inspiration](http://daycamp.ymcagta.org/) 



