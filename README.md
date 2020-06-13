# WildCourses:

A Desktop App for courses written in Node, Express, Mongo, Electron and Python

## What it can do:

To use the app, you need to create an account. Then you can create and buy courses.
After buying a course, you can ask questions in a forum and like the course.
A course contains several sections that contain lessons. You can also follow people
whoose courses you like. As an author of a course you will **GET** notified whenever
someone liked your course or asked a question in its forum. You can also **GET** notified
when somebody followed you or answered a questions which you've asked in the forum of a course.
When you create a course, you can choose up to 5 topics. You can like topics so that you
can **GET** good recommendations. Of course you can search for courses and users.

## How it works:

Frontend (Node, Electron) <---> (*maybe* API-Communication (Python)) <---> API (Node, Express) <---> DB (Mongo)

OR without API-Communication in Python - Communication in Node from Frontend (I don't know)

## App:

In the electron app there are four sections you can navigate to:

- **Notifications**

- **Explore** (recommendations and searching)

- **Courses**

- **Settings**

## API:

The api is made with Node and Express, used by the Frontend (made with Node and Electron) and tested in Python.

### API Endpoints:

At the end of every url there must be query parameters for userId and password: ```?userId={something}&pw={something}```

The actions after for an endpoint that are inside of brackets *do not only require an
account*, e.g. you need to be the owner of the course to do **PATCH**.

Endpoints which contain a list of something (e.g. list of courses) do not have **PUT**, only
**PATCH**. With **PATCH**, here you can change e.g. the name of an element in the list, but to change
details about the element, use **PUT** or **PATCH** at the *element's* enpoint. In these lists, the elements
are stored with their ID so that it still works when the course has a new name. (This is always very smart!)

Many of the methods **GET** called automatically when another method is called.

**List:**

- ```/courses```: **GET** list of all courses, **POST** a new course, **DELETE** a course, **PATCH** to change info about any course

- ```/courses/:courseId```: **GET** info about course, **PUT** & **PATCH** to change info about this course

- ```/courses/:courseId/sections```: **GET** sections of course, **POST** a new section, **DELETE** a section, **PATCH** to change info about sections (e.g. sections' names)

- ```/courses/:courseId/sections/:sectionName```: **GET** info about section, **DELETE** info about section, **POST** new info about section, **PUT** & **PATCH** to change info about section

- ```/courses/:courseId/sections/:sectionName/lessons```: **GET** a list of lessons, **DELETE** a lesson, **POST** a new lesson, **PATCH** to change info about lessons (e.g. lessons' name)

- ```/courses/:courseId/sections/:sectionName/lessons/:lessonName```: **GET** info about the lesson, **DELETE** info about section, **POST** new info about the lesson, **PUT** & **PATCH** to change info about the lesson

- ```/courses/:courseId/forum```: **GET** a list of the questions, **DELETE** a question, **POST** a new question, **PATCH** to change info about the questions

- ```/courses/:courseId/forum/:questionName```: **GET** info about this question, **DELETE** info about this question, **POST** new info about this question, **PUT** & **PATCH** to change info about this question

-----------

- ```/accounts/:accountId```: **GET** info about this account, **DELETE** info about this account, **POST** new info about this account, **PUT** & **PATCH** to change info about the account

-----------

- ```/topics```: **GET** a list if all the topics

- ```/topics/:topicName/courses```: **GET** a list of all the courses, **DELETE** a course from the list (when course is deleted or topic removed), **POST** a new course (if course has topic), **PATCH** to change info about courses

-----------

- ```/recommendations```: **GET** all the recommendations

- ```/recommendations/courses```: **GET** all the recommendations for courses

- ```/recommendations/users```: **GET** all the recommendations for users

-----------

- ```/notifications```: **GET** all the notifications

## DataBase:

It's MongoDB. You can often see something like this: {name: id, ...}

### How courses are stored:

```json
{
    "name": "Ultimate Express.js Course",
    "id": "COURSE_937428",
    "price": 25.00,
    "topics": ["api", "nodejs", "expressjs", "javascript"],
    "authors": {"Benjamin Blümchen": "his id"},
    "likes": {"Jannis Kohle": "his id", "The Javascripter": "his id", "Darth Vader": "his id"},
    "buyers": {"Jannis Kohle": "his id", "The Javascripter": "his id", "Darth Vader": "his id", "The Javascript Hater": "his id", "The stupid Benjamin": "his id"}
}
```

### How accounts are stored:

```json
{
    "name": "Darth Vader",
    "id": "USER_257195",
    "ownCourses": {"How to be cool": "its id", "The PHP bootcamp": "its id"},
    "boughtCourses": {"Ultimate Express.js Course": "its id", "How to become smart": "its id"},
    "followers": {"The Javascripter": "his id"},
    "following": {"The stupid Benjamin": "his id", "Jannis Kohle": "his id"},
    "likedCourses": {"The Ultimate Express.js Course": "its id"},
    "likedTopics": ["nodejs", "javascript"]
}
```
