# WildCourses:

A Desktop App for courses written in Node, Express, Mongo, Electron and Python

## What it can do:

You must create an account to be able to use the app. Then you can buy courses or create your own.
Every course has sections which contain lessons. The app tracks how much of the whole course, and
of each section you've completed. (e.g. 34% of whole course and 63% of section 'MongoDB')
Courses can also have forums.

## How it works:

Frontend (Node, Electron) <---> (API-Communication (Python)) <---> API (Node, Express) <---> DB (Mongo)

OR without API-Communication in Python - Communication in Node from Frontend (I don't know)
