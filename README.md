# Augmented Reality Certification

The purpose of this site is to help everybody get started developing in AR.

Here are a few of the guidelines for the site:

-   Must be free to use
-   Courses can be accessed without an account. However, to track progress and earn certificates, an account is required.
-   Internationalization will be supported from the get go. This will require more effort getting the site set up, but we want to allow anyone to learn AR. The site will initially launch with just English, but adding more languages will then only require translating with no extra development effort.
-   Planned tracks are Lens Studio, SparkAR, and AR.js. Initial focus is on Lens Studio
-   Each track will consist of different courses. A track would be the platform (e.g. Lens Studio) and each course will be different types of effects and difficulty levels (e.g. Beginner face masks, intermediate scripting, advanced world lens, etc). Upon completion of a course, a capstone lens will be submitted for human review. If it passes review, a certificate will be issued. Upon completion of all courses, a certificate will be issued for track completion.
-   Going through the course won't be a requirement for completing the capstone so that people with prior knowledge won't have to complete all courses. However, all capstones must be completed to get the track certificate.
-   Backend resources will be hosted on AWS. User accounts and course progress will be stored in Cognito/DynamoDB and any backend functionality will be done through lambda functions
-   Frontend will be written in Gatsby. AWS Amplify integrates nicely with React and gives us easy access to authentication through Cognito. Courses can be written in markdown which makes it easier for people to contribute. The build process can generate the various pages for each language.
-   Frontend will be hosted through Netlify. We should be good with the free tier, but if things really grow we can upgrade at a later date.
-   All code for the site will be open source. We want to create an open learning platform, including the site.
