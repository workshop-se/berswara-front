# HTTP API Documentation

## Auth Service

### POST /users (User registration)

Request:
```json
{
  "fullname": string,
  "email": string,
  "username": string,
  "password": string,
}
```

Response:
- 201 Created
```json
{
  "message": "User registered successfully",
  "data": {
      "user": {
          "id"
      }
  }
}
```

### POST /authentications (User login)

Request:
```json
{
  "username": string,
  "password": string,
}
```

- 200 OK
```json
{
    "message": "User logged in successfully",
    "data": {
        "accessToken": string,
        "refreshToken": string,
    }
}
```

### PUT /authentications (Token rotation)

Request:
```json
{
  "refreshToken": string,
}
```

- 200 OK
```json
{
    "message": "Token rotated successfully",
    "data": {
        "accessToken": string,
    }
}
```

### DELETE /authentications (User logout)
Request:
```json
{
  "refreshToken": string,
}
```

- 200 OK
```json
{
    "message": "User logged out successfully"
}
```

## Forum Service

### POST /threads (Create thread)
Request:

Header: {
    Authorization: Bearer <accessToken>
}

Body:
```json
{
  "title": string,
  "body": string,
  "imageURL": string // Optional
}
```

- 201 Created
```json
{
    "message": "Thread created successfully",
    "data": {
        "thread": {
            "id": string,
            "title": string,
            "body": string, // Rich text
            "owner: {
                "id": string,
                "username": string,
            },
            "createdAt": string,
        }
    }
}
```

### GET /threads (Get all threads)
Request:

Query: 
{
    page: number;
    limit: number;
}

- 200 OK
```json
{
    "message": "Threads fetched successfully",
    "data": {
        "threads": [
            {
                "id": string,
                "title": string,
                "body": string, // partial
                "owner: {
                    "id": string,
                    "username": string,
                },
                "createdAt": string,
                "commentsCount": number;
            }
        ]
    }
}
```

### GET /threads/:id (Get thread by id)
Request:

Params: {
    id: string,
}

- 200 OK
```json
{
    "message": "Thread fetched successfully",
    "data": {
        "thread": {
            "id": string,
            "title": string,
            "body": string,
            "owner: {
                "id": string,
                "username": string,
            },
            "createdAt": string,
            "comments": [
                {
                    "id": string,
                    "body": string,
                    "owner: {
                        "id": string,
                        "username": string,
                    },
                    "createdAt": string,
                }
            ]
        }
    }
}
```

### DELETE /threads/:id (Delete thread)
Request: 

Header: {
    Authorization: Bearer <accessToken>
}

- 200 OK
```json
{
    "message": "Thread deleted successfully"
}
```

### POST /threads/:id/comments (Create comment)
Request:

Header: {
    Authorization: Bearer <accessToken>
}

Body:
```json
{
  "body": string, // Rich text
}
```

- 201 Created
```json
{
    "message": "Comment created successfully",
    "data": {
        "comment": {
            "id": string,
            "body": string,
            "owner: {
                "id": string,
                "username": string,
            },
            "createdAt": string
        }
    }
}
```

### DELETE /threads/:id/comments/:commentId (Delete comment)
Request: 
Params: {
    id: string,
    commentId: string,
}

Header: {
    Authorization: Bearer <accessToken>
}

- 200 OK
```json
{
    "message": "Comment deleted successfully"
}
```

## Content Management Service
### POST /contents/news (Create news)
Request: 

Header: {
    Authorization: Bearer <accessToken>
}

Body:
```json
{
  "title": string,
  "body": string // Rich text
}
```

- 201 Created
```json
{
    "message": "News created successfully",
    "data": {
        "news": {
            "id": string,
            "title": string,
            "body": string, // Rich text
            "createdAt": string
        }
    }
}
```

### DELETE /contents/news/:id (Delete news)
Request:
Header: {
    Authorization: Bearer <accessToken>
}

Params: {
    id: string,
}

- 200 OK
```json
{
    "message": "News deleted successfully"
}
```

### POST /contents/quiz (Create quiz)
Request:
Header: {
    Authorization: Bearer <accessToken>
}

Body:
```json
{
  "questions": [
      {
          "question": string,
          "options": [
              {
                  "text": string,
                  "isCorrect": boolean
              }
          ]
      }
  ]
}
```


### DELETE /contents/quiz/:id (Delete quiz)
Request:
Header: {
    Authorization: Bearer <accessToken>
}

Params: {
    id: string,
}

- 200 OK
```json
{
    "message": "Quiz deleted successfully"
}
```

### POST /contents/modules (Create module)
Request:
Header: {
    Authorization: Bearer
}

Body: 
```json
{
  "title": string,
  "url": string, // URL to the module
  "thumbnail": string // URL to the thumbnail
}
```

## Module & News Service
### GET /contents/news
Request:

Query: 
{
    page: number;
    limit: number;
}

- 200 OK
```json
{
    "message": "News fetched successfully",
    "data": {
        "news": [
            {
                "id": string,
                "title": string,
                "body": string,
                "publishedAt": string,
            }
        ]
    }
}
```

### GET /contents/news/:id
Request:

Params: {
    id: string,
}

- 200 OK
```json
{
    "message": "News fetched successfully",
    "data": {
        "news": {
            "id": string,
            "title": string,
            "body": string,
            "publishedAt": string,
        }
    }
}
```

### GET /contents/modules

Request:

Query: 
{
    page: number;
    limit: number;
}

- 200 OK
```json
{
    "message": "Modules fetched successfully",
    "data": {
        "modules": [
            {
                "id": string,
                "title": string,
                "url": string,
                "thumbnail": string,
            }
        ]
    }
}
```

## Quiz Service
### GET /contents/quiz (get all quizes)
Request:

Query: 
{
    "limit": number
}

- 200 OK
```json
{
    "message": "Quizzes fetched successfully",
    "data": {
        "questions": [
            {
                "id": string,
                "question": string,
                "options": [
                    {
                        "text": string,
                        "isCorrect": boolean
                    }
                ]
            }
        ],
    }
}
```

### GET /contents/quiz/:id
Request:

Params:
{
    "id": string
}

- 200 OK
```json
{
    "message": "Quiz fetched successfully",
    "data": {
        "id": string,
        "question": string,
        "options": [
            {
                "text": string,
                "isCorrect": boolean
            }
        ]
    }
}
```
