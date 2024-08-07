const specialDates = [
  { date: "2024-01-03", description: "Run 3K" },
  { date: "2024-01-04", description: "Bike 45mins" },
  { date: "2024-01-05", description: "Physio" },
  { date: "2024-01-07", description: "Strength Training" },
  { date: "2024-01-08", description: "Strength Training" },
  { date: "2024-01-09", description: "Bike 30mins" },
  { date: "2024-01-10", description: "Run 3K" },
  { date: "2024-01-11", description: "Strength Training" },
  { date: "2024-01-12", description: "Run 3K" },
  { date: "2024-01-15", description: "Run 3K, Tabata 10 mins" },
  { date: "2024-01-16", description: "Run 3K" },
  { date: "2024-01-17", description: "Physio" },
  { date: "2024-01-18", description: "Strentgh Training" },
  { date: "2024-01-19", description: "Bike 45mins" },
  { date: "2024-01-21", description: "Cross Country Ski - 45 mins" },
  { date: "2024-01-22", description: "Cross Country Ski - 3.45K" },
  { date: "2024-01-23", description: "Strength Training" },
  { date: "2024-01-24", description: "Physio" },
  { date: "2024-01-25", description: "Tabata 20 mins" },
  { date: "2024-01-26", description: "Run 4K" },
  { date: "2024-01-27", description: "Strength Training" },
  { date: "2024-01-29", description: "Bike 45mins" },
  { date: "2024-01-30", description: "Run 3.5K" },
  { date: "2024-01-31", description: "Cross Country Ski - 3.5K" },
  { date: "2024-02-01", description: "Strentgh Training" },
  { date: "2024-02-03", description: "Tabata 20 mins" },
  { date: "2024-02-04", description: "Shoveling snow - 1 hour" },
  { date: "2024-02-05", description: "Shoveling snow - 2 hours" },
  { date: "2024-02-09", description: "Strength Training" },
  {
    date: "2024-02-12",
    description:
      "Run 4.25K - Avg Pace: 7:20 min/KM, 31 Mins, Avg HR: 152, Max HR: 167, Right knee pain (3/5). Knee remained sore the following day.",
  },
  { date: "2024-02-13", description: "Strentgh Training" },
  { date: "2024-02-17", description: "Cross Country Ski - 8.4K (towed kids)" },
  { date: "2024-02-18", description: "Cross Country Ski - 10.5K" },
  { date: "2024-02-20", description: "Strength Training" },
  {
    date: "2024-02-21",
    description: "Bike trainer 50mins - Avg HR: 122, Max HR: 146",
  },
  { date: "2024-02-22", description: "Snowboarding 3hrs" },
  {
    date: "2024-02-24",
    description: "Bike trainer 1hr - Avg HR: 115, Max HR: 148",
  },
  {
    date: "2024-02-28",
    description:
      "Run 3K + Strength training - Avg pace 7:47 m/km, 22:48, Avg HR: 145, Max HR: 159",
  },
  { date: "2024-03-09", description: "Run 4K" },
  {
    date: "2024-03-11",
    description: "Run 3K + walk 30min, some right knee pain that day",
  },
  { date: "2024-03-12", description: "Strength Training " },
  {
    date: "2024-03-15",
    description:
      "Run 3K - Avg Pace: 9:00 min/KM, 28 Mins, Avg HR: 147, Max HR: 160, no knee pain",
  },
  { date: "2024-03-16", description: "Run 4K" },
  { date: "2024-03-17", description: "Strength Training" },
  {
    date: "2024-03-18",
    description:
      "Run 3.25K - slight pain and stiffness in right ankle for the last few days",
  },
  { date: "2024-03-19", description: "Strength Training" },
  { date: "2024-03-24", description: "Stability exercises" },
  { date: "2024-03-25", description: "Run 3.25K" },
  { date: "2024-03-28", description: "Strength Training" },
  { date: "2024-03-29", description: "Run 4K" },
  {
    date: "2024-04-06",
    description: "Run 3K - right knee pain (4/5) after 1.5K",
  },
  { date: "2024-04-09", description: "Strength Training " },
  { date: "2024-04-12", description: "Run 4K - 35 mins, no knee pain" },
  { date: "2024-04-13", description: "Tabata 20 mins" },
  {
    date: "2024-04-17",
    description: "Run 4K - no knee pain and very little ankle pain",
  },
  { date: "2024-04-19", description: "Strength Training" },
  {
    date: "2024-04-22",
    description:
      "Run 4K - sore ankle (outside and back) from walking in beach the day before",
  },
  {
    date: "2024-04-23",
    description:
      "Strength Training - 🚨 right ankle became super sore all week, not just the inside ligament but moreso the back and outside too",
  },
  { date: "2024-04-29", description: "Tabata 20 mins" },
  {
    date: "2024-04-30",
    description:
      "Run 3K - (1K with minimal shoes), 26:01 mins, pace 6:53/Km, avg HR 154, max HR 172, ",
  },
  { date: "2024-05-01", description: "Strength Training" },
  {
    date: "2024-05-02",
    description:
      "Run 4K - (1.5K with minimal shoes), 29:02 mins, pace 7:23/km, avg HR 151, max HR 169, no knee/ankle pain",
  },
  {
    date: "2024-05-05",
    description:
      "Run 4K - (2K with minimal shoes), 31:34 mins, pace 7:52/km, avg HR 140, max HR 156, no knee/ankle pain",
  },
  { date: "2024-05-06", description: "Strength Training" },
  {
    date: "2024-05-07",
    description:
      "Run 4K - (2K with minimal shoes), 29:00 mins, pace 7:24/km, avg HR 155, max HR 169, inner ankle pain 2/5",
  },
  { date: "2024-05-08", description: "Tabata 20 mins" },
  {
    date: "2024-05-13",
    description:
      "Run 4.28K - (2K with minimal shoes), 32:36 min, pace 7:37, avg HR 147, max HR 163, right ankle stiff and sore",
  },
  {
    date: "2024-05-16",
    description:
      "Run 4.5K - (2.25K with minimal shoes), 34:17 min, pace 7:36, avg HR 151, max HR 165, some slight left knee pain 1/5, right ankle stiff and sore",
  },
  { date: "2024-05-17", description: "Tabata 20 mins" },
  { date: "2024-05-21", description: "Strength Training" },
  {
    date: "2024-05-22",
    description:
      "Run 4.25K - (2K with minimal shoes), 31:43 min, pace 7:31, avg HR 150, max HR 165, some slight right knee pain 1/5, sligth right ankle pain 1/5",
  },
  { date: "2024-05-24", description: "Tabata 20 mins" },
  {
    date: "2024-05-27",
    description:
      "Run 4.17K - (2K with minimal shoes), 30:35 min, pace 7:20, avg HR 153, max HR 168, sligth right ankle pain 1/5",
  },
  { date: "2024-05-30", description: "Strength Training" },
  {
    date: "2024-05-31",
    description:
      "Run 4.15K - (2K with xeros), 31:40 min, pace 7:37/km, avg HR 152, max HR 166, slight right ankle pain 2/5",
  },
  { date: "2024-06-03", description: "Hike 6K, 2hrs, 33lbs of weight" },
  { date: "2024-06-06", description: "Strength Training" },
  { date: "2024-06-07", description: "Run 4K" },
  {
    date: "2024-06-11",
    description:
      "Run 4.3K - (2.2K with xeros), 37:10 min, pace 8:18/km, avg HR 149, max HR 170, slight right ankle pain 2/5",
  },
  { date: "2024-06-13", description: "Strength Training" },
  { date: "2024-06-14", description: "Run 4.6K" },
  {
    date: "2024-06-15",
    description: "Hill climbs with 42lbs in backpack, 40mins",
  },
  { date: "2024-06-21", description: "Hike - Cape Chignecto" },
  { date: "2024-06-22", description: "Hike - Cape Chignecto" },
  { date: "2024-06-23", description: "Hike - Cape Chignecto" },
  { date: "2024-06-25", description: "Strength Training" },
  {
    date: "2024-07-03",
    description:
      "Tabata - 20 mins. Pushups, Dips, Side V sits, dead bug alternating arms/legs",
  },
  {
    date: "2024-07-07",
    description:
      "Strength Training - Dumbell shoulder press, Single leg squat, calf raises, seated rotator cuff dumbell",
  },
  {
    date: "2024-07-08",
    description:
      "Run + Tabata - Run: 16 mins, walk/run 1 min intervarl, 2km (left knee pain 2/10. Ankle pain 0). Taba:ta: 15 mins - Pushups (6/interval), Crunches, one-arm tricep pushups",
  },
  {
    date: "2024-07-10",
    description:
      "Run + Strength Training - Run: 18 mins, walk/run 1 min intervarl, 2.4km (left knee pain 2/10. Ankle pain 1/10). Strength Training: Seated dumbell shoulder press, weigthed Lunges (right leg only), single leg deadlift (right leg only), seated rotator cuff curl",
  },
  {
    date: "2024-07-11",
    description:
      "Strength Training - Flatbench Dumbell press, Bent over barbell row, Shoulder Pullover on bench, Seated Calf Raises, face pulls",
  },
];

export default specialDates;
