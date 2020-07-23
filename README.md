# **API User Guide**

|**Table of Contents:**|
|-|
|[Authentication Routes](#Authentication-Routes)|
|[Post Routes](#Post-Routes)|

### **Authentication Routes**

Server located at: tbd

###  **User Registration**:

#### POST */api/auth/register*

Creates a new user
Returns a string with the users username.

Request:
```javascript
{
  username: "testinguser1", // string (required), must be unique
  password: "testing123!", // string (required) 
}
```
Response:

```javascript
{
    message: "Hello username"
}
```

### **User Login** 
[back to top](#api-user-guide)
#### POST */api/auth/login*

Validates user's credentials.
Returns an object with user info and stores a session in cookies.

Request:
```javascript
{
  username: "firstnamelastname", // string (required)
  password: "testing123!", // string (required)
}
```

Response:
```javascript
{
    username: "tyler",
    password: "testing123!"
}
```

### **User Login** 
[back to top](#api-user-guide)
#### GET */api/auth/logout

Invalidates the current session if session is currently active.

Request:
```javascript
// No input needed
```

Response:
```javascript
1
```

## **Post Routes**
[back to top](#api-user-guide)

#### GET *api/posts*

Returns an array of posts.

Request:
```javascript
// No input needed
```
Response:
```javascript
[
    {
        "id": 1,
        "title": "Why redux is great",
        "post": "State management will change your life!"
    },
    {
        "id": 2,
        "title": "Do developers need sleep?",
        "post": "... We don't talk about that..."
    },
    {
        "id": 3,
        "title": "Learning and relearning!",
        "post": "Ah yes, the lifestyle."
    },
]
```

#### GET *api/posts/:id*

Return a post object at the specified id.

Request:
```javascript
// No input needed
```
Response:
```javascript
{
    "id": 3,
    "title": "Learning and relearning!",
    "post": "Ah yes, the lifestyle."
}
```

#### POST *api/posts/new*

Posting an post. You must be logged in with a valid session. Must have a title, and a post (body).

Request:
```javascript
{
    "title": "Learning and relearning!", //required
    "post": "Ah yes, the lifestyle." //required
}
```
Response:
```javascript
{
    "id": 3,
    "title": "Learning and relearning!",
    "post": "Ah yes, the lifestyle."
}
```

#### PUT *api/posts/:id*

Updating an post. You must be logged in with a valid session. You cannot modify id. Must have at least one of the fields besides id, can handle both.

Request:
```javascript
{
	"title": "First title change" // required
}
```
Response:
```javascript
{
    "id": 3,
    "title": "First title change",
    "post": "Ah yes, the lifestyle."
}
```

#### DELETE *api/posts/:id*

Deleting a valid post. You must be logged in with a valid session, and pass in the id of an existing post.

Request:
```javascript
// No input needed
```
Response:
```javascript
1
```