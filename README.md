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
can get good recommendations.

## How it works:

Frontend (Node, Electron) <---> (*maybe* API-Communication (Python)) <---> API (Node, Express) <---> DB (Mongo)

OR without API-Communication in Python - Communication in Node from Frontend (I don't know)

## API:

### Endpoints:

- ```/courses/:courseId?userId={something}&pw={something}``` (Everybody can go to this page, frontend would look different if bought)

- ```/courses/:courseId/sections?userId={something}&pw={something}```

- ```/courses/:courseId/sections/:sectionName?userId={something}&pw={something}```

- ```/courses/:courseId/sections/:sectionName/lessons?userId={something}&pw={something}```

- ```/courses/:courseId/sections/:sectionName/lessons/:lessonName?userId={something}&pw={something}```

- ```/courses/:courseId}/forum?userId={something}&pw={something}```

- ```/courses/:courseId}/forum/:questionName?userId={something}&pw={something}```

- ```/courses/list?userId={something}&pw={something}```

-----------

- ```/accounts/:accountId```

-----------

- ```/topics```

- ```/topics/:topicName/courses```

-----------

- ```/recommendations?userId={something}&pw={something}```

- ```/recommendations?userId={something}&pw={something}/courses```

- ```/recommendations?userId={something}&pw={something}/users```

-----------

- ```/notifications?userId={something}&pw={something}```

## App:

In the electron app there are four sections:

- **Notifications**

- **Explore** (recommendations and searching)

- **Courses**

- **Settings**
