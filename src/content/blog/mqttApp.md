---
title: "iOS Inactivity Local Notification System"
author: Javier Flores
description: "A robust inactivity notification system for iOS devices."
pubDate: 2023-07-08
draft: false
tags: ["iOS", "Flutter", "APNS", "MQTT", "PostgreSQL"]
---
## Introduction

Hello everyone! Today, we're diving into an exciting project that leverages a range of technologies to build a robust notification system. Specifically, this system is designed to send inactivity notifications to iOS devices. It's particularly useful for administrators who want to keep tabs on user activity levels. So, let's break down the workflow and get into the details.


## Workflow Overview

1. **Send a POST Request:** The system starts by sending inactivity data in JSON format to the Notification Server.
2. **Device Query:** It then queries all connected iOS devices that have opted to receive API notifications.
3. **User Query:** Next, it checks an internal PostgreSQL database to find the user associated with each inactive device.
4. **Endpoint Creation:** An API endpoint is created for associating devices with their respective users.
5. **User Administration Panel:** A panel is made available to manage user accounts, devices, and their inactivity statuses.
6. **UI in Flutter:** The project also includes a user interface developed in Flutter to display JSON data from the Notifications API.
7. **Notification Logging:** An endpoint is set up to keep track of sent notifications and their details.
8. **MQTT Implementation:** The system uses MQTT to send notifications to iOS devices.
9. **Notification Sending:** Notifications are sent to the relevant devices.
10. **Testing:** The system is tested in a network environment similar to Vitesco.
11. **Confirmation:** Finally, after a user receives a notification, a confirmation message is sent back to the server.


## Detailed Steps

### Sending the POST Request
* In this step, inactivity data is encapsulated in a JSON payload and sent to the Notification Server through a POST request.

### Querying Devices and Users
* Here, we use SQL queries on a PostgreSQL database to identify devices and users who will be the recipients of the inactivity notifications.

### Creating Endpoints
* The system offers API endpoints for device-user association and logging notifications.

### User Admin Panel
* Administrators can use this panel to manage everything, from user accounts to devices and inactivity notifications.

### UI Development in Flutter
* The Flutter-based UI is intuitive and clearly displays the JSON data from the Notifications API.

### MQTT Implementation
* The system uses MQTT to send notifications to iOS devices.


### Testing and Confirmation
* Rigorous tests are conducted in a network environment similar to Vitesco. A confirmation step ensures the delivery of notifications.


## Conclusion

This workflow encapsulates the essentials of a robust inactivity notification system for iOS devices. The project amalgamates various technologies like Flutter, APNS, and PostgreSQL, making it an exciting venture for any tech enthusiast.

For anyone looking to manage user activity levels on iOS devices, this project serves as a comprehensive guide.
![Diagram](https://i.imgur.com/pfyaklJ.jpg)

Thank you for reading, and I hope you find this project both intriguing and useful!