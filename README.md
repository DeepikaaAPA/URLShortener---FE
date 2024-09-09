# URL Shortener App

## Overview

This is a URL shortener application built using React. The app allows users to register, login, and logout. Users can submit lengthy URLs to obtain short URLs, view a dashboard with a chart showing the requests per month, and a table displaying the list of URLs and their short versions.

## Features

- **User Registration**: Two-step authentication process using email verification.
- **User Login/Logout**: Secure login and logout functionality.
- **URL Shortening**: Submit lengthy URLs to obtain short URLs.
- **Dashboard**: View a chart showing the number of requests per month and a table listing all URLs and their short versions.

## Usage

1. **Register**: Go to the registration page and enter your email. A verification email will be sent to your email address. Follow the link in the email to complete the registration process.

2. **Login**: After registration, log in using your email and password.

3. **Shorten URL**: Once logged in, navigate to the URL shortening page, enter the lengthy URL, and submit. A short URL will be generated.

4. **Dashboard**: View the dashboard to see a chart of the number of requests per month and a table listing all URLs and their short versions.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Chart.js**: Library for creating charts.
- **Axios**: Promise-based HTTP client for making API requests.
- **Node.js**: Backend runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user data and URLs.
