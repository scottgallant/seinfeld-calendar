A simple Next.js calendar app to track daily habits.

![screenshot](https://scottgallant.net/media/seinfeld-calendar.png)

The [Seinfeld Strategy](https://jamesclear.com/stop-procrastinating-seinfeld-strategy) is used when your trying to build a daily habit (for Jerry Seinfeld, that was writing). You just mark a big X on a calendar each day you do your activity. Read my full post on this [here](https://scottgallant.net/posts/seinfeld-calendar/). 

## Getting Started

```
npm install
```

```       
npm run dev
```

Then add dates to `src/data/specialDates.js` like so:

```
const specialDates = [
    { "date": "2024-01-03", "description": "Run 3K" },
    { "date": "2024-01-04", "description": "Bike 45mins" },
    { "date": "2024-01-05", "description": "Physio" },
    { "date": "2024-01-07", "description": "Strength Training" },
];
```

## Deploying to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fscottgallant%2Fseinfeld-calendar)