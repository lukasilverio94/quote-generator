![image](https://github.com/lukasilverio94/quote-generator/assets/117397454/01fa7141-0423-4587-af11-7200669437db)

# Quote Generator App
This is a simple React application that generates random inspirational quotes using the api-ninjas API. Follow the steps below to set up and run the project locally.

## Prerequisites
Make sure you have the following installed on your machine:

Node.js
npm (Node Package Manager)

## Getting Started
Clone the repository to your local machine:

git clone https://github.com/your-username/quote-generator.git
Replace your-username with your GitHub username.

### Navigate to the project directory:

bash
Copy code
cd quote-generator
Install the project dependencies:

npm install

## API Key Setup
To fetch quotes, you need to obtain an API key from api-ninjas. Follow these steps:

Create an account on api.api-ninjas.com.
Obtain your API key from the dashboard.
Once you have your API key, create a .env file in the project root and add the following line:

### Copy code
VITE_API_KEY=your-api-key-goes-here
Replace your-api-key-goes-here with the API key you obtained.

### Running the App
After setting up the API key, you can run the application using the following command:

bash
Copy code
npm run dev
This will start the development server, and you can view the Quote Generator app by visiting http://localhost:3000 in your web browser.

### Usage
The app will display a random inspirational quote on the initial load.
Click the "New Quote" button to generate a new random quote.
Feel free to explore the code and customize the app according to your preferences. Enjoy exploring inspirational quotes with the Quote Generator!
