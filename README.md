# Virtual Event Management Platform

Welcome to the Virtual Event Management Platform! This project is a backend system designed to manage virtual events, including secure user registration, event scheduling, and participant management. Built with Node.js, Express.js, and MongoDB, this platform ensures a robust and scalable solution for handling various event-related operations.

## Features

### User Management
- **Secure User Registration:** Users can sign up with roles such as "Event Organizer" or "Attendee".
- **Authentication:** JWT-based session management for secure login and token-based authentication.
- **Authorization:** Role-based access control to ensure only authorized users can perform certain actions.

### Event Management
- **Create Events:** Event Organizers can create events with details like name, description, and date.
- **Update Events:** Modify event details as needed.
- **Delete Events:** Remove events from the system.
- **View Events:** Retrieve a list of all events in the system.

### Prerequisites
- Node.js
- MongoDB

## Environment Variables

  To run this project, you will need to add the following environment variables to your .env file

-  PORT
-  MONGODB_URL
-  API_SECRET

## Installation

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sumitranjan/virtual-event-management-platform.git

2. **Navigate to the project directory:**
   ```bash
   cd virtual-event-management-system
3. **Start the server:**
   ```bash
   npm run start
   ```


# API Endpoints

- **POST** `/api/v1/auth/login`: Login a user.
- **POST** `/api/v1/auth/register`: Register a new user.
- **GET** `/api/v1/events/`: Retrieve the list of events.
- **POST** `/api/v1/events/`: Create a new event.
- **PUT** `/api/v1/events/:id`: Update the event.
- **DELETE** `/api/v1/events/:id`: Delete the event.
- **POST** `/events/:id/register`: Register for the event by the user.

## Authentication

### Login a User

**POST** `/api/v1/auth/login`

**Request:**

```bash
  {"email": "user@example.com", "password": "user_password"}
```

### Register a User

**POST** `/api/v1/auth/register`

**Request:**

```bash
  {"name": "Sumit", "email": "sumit@example.com", "password": "user_password", "role": "Event organizer"}
```

## Event Management

### Retrieve All Events

**GET** `/api/v1/events`

**Request:**

```bash
  "Authorization: Bearer your_jwt_token"
```


### Create a New Event

**POST** `/api/v1/events/`

**Request:**

```bash
  {"name": "Tech Conference 2024", "description": "A conference for tech enthusiasts.", "eventDate": "2024-09-15T10:00:00Z"}
```

### Update an Event

**PUT** `/api/v1/events/:id`

**Request:**

```bash
  {"name": "Updated Tech Conference 2024", "description": "An updated conference.", "eventDate": "2024-09-16T10:00:00Z"}
```

### Delete an Event

**POST** `/api/v1/events/:id`


## Contributing
 Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
 This project is licensed under the MIT License. See the LICENSE file for more information.



