# NodeJS Webscraper
Demo for showing how to scrape data and get backend data to the frontend. This repository is inspired by the video tutorial from Ania Kubow [here](https://youtu.be/-3lqUHeZs_0)

## To run this project

You can run this project on your local machine. Just pull it down and do the following:

### `npm i`

1. Run the command above to install all the packages

### Start the Project

### This project uses two npm scripts for different purposes:

2. Start the Node.js Application (server): This script uses nodemon to automatically restart the application whenever changes are detected in the source code (src/index.js).

```bash
npm start
```

3. Run Tailwind CSS in Development Mode: This script uses Tailwind CSS to process styles from ./src/input.css and outputs them to ./dist/output.css. The --watch flag enables Tailwind to watch for changes in the input file and update the output file accordingly.

```bash
npm run dev
```

4. Open [http://localhost:8000/results](http://localhost:8000/results) with your browser to see the results of the scrape in your terminal.

5. Finally, open the index.html file in your browser to see the results showing up.

## MIT Licence

Copyright (c) 2023 Marcio José Lisboa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*Translation: Ofcourse you can use this for you project! Just make sure to say where you got this from :)

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

