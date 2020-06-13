# WildCourses:

A Desktop App for courses written in Node, Express, Mongo, Electron and Python

## What it can do:

To use the app, you need to create an account. Then you can create and buy courses.
After buying a course, you can ask questions in a forum and like the course.
A course contains several sections that contain lessons. You can also follow people
whoose courses you like. As an author of a course you will get notified whenever
someone liked your course or asked a question in its forum. You can also get notified
when somebody followed you or answered a questions which you've asked in the forum of a course.
When you create a course, you can choose up to 5 topics. You can like topics so that you
can get good recommendations. If a recommendation is not interesting to you, you can tell the program by clicking a button.

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

- ```/courses/:courseId```

- ```/courses/:courseId/sections```

- ```/courses/:courseId/sections/:sectionName```

- ```/courses/:courseId/sections/:sectionName/lessons```

- ```/courses/:courseId/sections/:sectionName/lessons/:lessonName```

- ```/courses/:courseId/forum```

- ```/courses/:courseId/forum/:questionName```

- ```/courses/list```

-----------

- ```/accounts/:accountId```

- ```/accounts/:accountId/followers```

- ```/accounts/:accountId/following```

- ```/accounts/:accountId/courses``` <- Courses which the person made, nobody can see courses that the person bought

- ```/accounts/:accountId/likedcourses```

-----------

- ```/topics```

- ```/topics/:topicName/courses```

-----------

- ```/recommendations```

- ```/recommendations/courses```

- ```/recommendations/users```

-----------

- ```/notifications```

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
    "likedCourses": {"The Ultimate Express.js Course": "its id"}
}
```
