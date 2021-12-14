# The Administrator

## General Assembly Capstone Project

### Link to GitHub Repositories:

- Front End: https://github.com/jmalabed/ga-capstone-fe
- Back End: https://github.com/jmalabed/ga-capstone-be

### Summary

The Administrator is an office guest management and hotdesk administration software that is designed to integrate COVID precautionary protocol in a transparent and anonymous way.

When visiting an office, you are likely going in to meet people at the office rather than work in isolation. Because the work environment is so fluid since COVID-19, hotdesking has become more common. A typical visit to the office by a guest or employee looks like this:

You are first greeted in the lobby by an admin that will typically sign you in to the building for security and Covid screening questions that are commonplace in today's work environment.

Next, you will migrate to an available (and clean) desk that you can work from. From there, you can make yourself at home while waiting for your meeting to get started.

You attend your meeting, and then head home before work traffic picks up in the afternoon.

The Administrator handles all of this typical administrative functionality, but also integrates COVID-19 notifications to people that were present in the building at the same time as the reported person was.

### Technologies

- MERN Stack: Mongo, Express, React, and Node
- HTML, CSS, and Javascript
- Extras: Twilio SMS, Moment
- Deployed to Heroku and Surge
- React - Bootstrap
- Dotenv
- MongoDB Mongo Atlas

## User Stories

- A business will be able to view the product capabilities and sign up
- A business will be able to manage their staff, hotdesks, and conference room resources from an organized list
- A guest visitor will be able to sign in to the building through a welcome page that collects email, name, and person they are visiting.
- The guest visitor will be assigned to a hotdesk and conference room to meet with their host.
- The guest will have access to an email link to self-report COVID infections to the company that theye have visited.
- The company can also report internal COVID-19 infections through the company portal.
- Desks are reserved for one hour and unavailable to additional visitors until that hour is up. This is designed to allow time for cleaning and avoiding unnecessary contact with others.

### Main Objectives

- Report COVID-19 transparently
- Handle hotdesk and conference room scheduling
- Allow a business to keep track of their office resources

## Link to Application

office-culture.surge.sh

## Site Graphics

### Wireframes

![Image of Wireframes](https://github.com/jmalabed/Administrator-Front-End/blob/main/img/administrator-full-wireframes.png?raw=true)
[Link to full wireframe](https://whimsical.com/covid-tracker-6fwqnmsjsuYbuo55pMUpZY)

### Entity Relationship Diagram

![Image of ERD](https://github.com/jmalabed/Administrator-Front-End/blob/main/img/administrator-ERD.png?raw=true)

## Future Work

- Scheduling integration
- Scrolling lists for employee, guests, hotdesk, and conference rooms
- Integrate conference rooms using the same approach as the hotdesks
