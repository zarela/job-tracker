# job-tracker
Job search tracker application

# GA WDIR MEAN Project: Job Trail

[Heroku Link] (Link)

## App Overview

Job Tracker is an application designed to save jobs of interest containing the most important information about the job post.
Each job table contains: job title, company, link to the job, if the user had applied to job or not, the date the job was created and a notes section. Under notes section, the user can save the user and password he/she used when registering to the company site.

The user should be able to add new jobs, edit them or delete them if is not longer an option.

## Original Wireframe

![alt tag](http://i.imgur.com/1uJknDA.png?1)

## User Stories

User can:
* Add new jobs to the user page
* Save relevant links to job post
* Edit the elements of the job listing
* Delete jobs no longer are of his/her interest
* Identify which jobs have been applied to
* Add extra notes to each job posting
* User can search by any word

## Stretch Goals (wish list)

* Add links to professional profiles such as LinkedIn, Resume, GA Profile so user can copy and paste when applying to a job.
* A user can search through the jobs listing by: jobs applied, level of interest or date.
* Add favorites page (model will need to be modified).

## Model Used
```
JobSchema{
  position: String,
  company: String,
  jobLink:  String,
  applied: Boolean,
  createdAt: Date,
  notes: String
}
```
## Copyrights
Logos are created by me.
Images are saved in the images folder and also hosted on Imgur.
