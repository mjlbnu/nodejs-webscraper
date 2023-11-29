const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const baseUrl = 'https://www.freecodecamp.org'
const path = '/news'

app.get('/', function (req, res) {
    res.json('This is my webscraper')
})

/* Foi utilizado Promise.all para aguardar todas as chamadas assíncronas dentro do loop antes de prosseguir.
   Note que o uso de map é para criar um array de promessas.
   get() no final é usado para converter isso em um array convencional. */
app.get('/results', async (req, res) => {
    try {
        const response = await axios(`${baseUrl}${path}`);
        const html = response.data;
        const $ = cheerio.load(html);
        const articles = [];

        const articlePromises = $('.post-card', html).map(async function () {
            const title = $(this).find('h2').text().trim();
            const imgLink = $(this).find('.post-card-image-link').find('img').attr('src');
            const url = `${baseUrl}${$(this).find('a').attr('href')}`;
            const tag = $(this).find('.post-card-tags').text().trim().replace('#', '');
            const author = $(this).find('.post-card-meta').find('.meta-content > a').text().trim();
            const authorImg = $(this).find('.post-card-meta').find('.static-avatar > img').attr('src');
            const timePassed = $(this).find('.post-card-meta').find('.meta-content > time').text().trim();
            const date = $(this).find('.post-card-meta').find('.meta-content > time').attr('datetime');

            const resume = await getResume(url);

            return {
                title,
                imgLink,
                url,
                tag,
                author,
                authorImg,
                date,
                timePassed,
                resume
            };
        }).get();

        const articlesData = await Promise.all(articlePromises);
        res.json(articlesData);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const getResume = async function (url) {
    try {
        const response = await axios(url);
        const $ = cheerio.load(response.data);
        const articleResumeText = $('.post-content > p:first').text().trim();
        return articleResumeText;
    } catch (error) {
        console.log(error);
    }
}

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));