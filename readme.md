# Simple CRUD App in Express

## Features

- **Create User**: Add a new user.
- **Read Users**: Get all users or one by ID.
- **Update User**: Modify user details.
- **Delete User**: Remove a user by ID.

## Installation

1. Clone the repo:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd crud-app-express
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

Start the server:

```bash
npm start
```

The API will be available at http://localhost:3000.

## Endpoints

Base URL: http://localhost:3000

1. Get All Users

   • Method: GET
   • Path: /users

2. Get User by ID

   • Method: GET
   • Path: /users/:id

3. Add a New User

   • Method: POST
   • Path: /users
   • Body:

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "johndoe@example.com"
}
```

4. Update a User

   • Method: PATCH
   • Path: /users/:id
   • Body:

```json
{
  "first_name": "Jane",
  "last_name": "Doe",
  "email": "janedoe@example.com"
}
```

5. Delete a User

   • Method: DELETE
   • Path: /users/:id
