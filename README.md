# Octavia Valentine

I want to ask Octavia out on a date. Her favorite color is cyan and her favorite animals are axolotls.

I used DALL-E to generate the initial images and Runway ML to convert it to a video.

## External Links
- [The website is linked here](https://octaviavalentine.com/)
- [Article about the project](https://medium.com/@austin-starks/how-i-used-ai-to-ask-a-girl-out-on-a-date-she-said-yes-913ae0277b0b) that outlines how images and videos were generated.

## Dependencies
- You need to create and setup a [SendGrid Email Account](https://sendgrid.com/en-us/1?adobe_mc_sdid=SDID%3D4BA48597E9BE0B3C-6F442E1059B631FE%7CMCORGID%3D32523BB96217F7B60A495CB6%40AdobeOrg%7CTS%3D1702859620) in order to be notified via email when your crush responds

## Installation

1. Clone the repository:
   `git clone https://github.com/austin-starks/octavia-valentine.git`
2. Go to the directory: `cd octavia-valentine `
3. Install the dependencies: `npm run build`
4. Setup the SENDGRID_API_KEY and SENDGRID_EMAIL in a .env file

## Turning on the system

To turn on the client and server:

1. Open two terminal windows.
2. In one window, turn on the client: `cd client; npm run dev`
3. In the other window, turn on the server: `cd app; npm start`
