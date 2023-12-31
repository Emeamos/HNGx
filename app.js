import express from 'express';
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  const { slack_name, track } = req.query;
  const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });
  const utcTime = new Date().toISOString().slice(0,19) + 'Z';
  const githubFileUrl = 'https://github.com/Emeamos/HNGx/blob/master/app.js';
  const githubRepoUrl = 'https://github.com/Emeamos/HNGx';

  const response = {
    slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
