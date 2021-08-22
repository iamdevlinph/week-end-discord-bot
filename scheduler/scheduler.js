const cron = require("node-cron");

const TEST_CHANNEL_ID = process.env.TEST_CHANNEL_ID;
const PROD_CHANNEL_ID = process.env.PROD_CHANNEL_ID;
const CHANNEL_ID = PROD_CHANNEL_ID || TEST_CHANNEL_ID;
console.log("CHANNEL_ID", CHANNEL_ID);

const schedules = [
  // party party!! 🎉🎉
  {
    title: "Let's get the party started!",
    description: "It's time to recharge!",
    schedule: "0 0 17 * * Friday",
  },
  // monday na sad 😭
  {
    title: "NRG full!",
    description: "Ready to face the week!",
    schedule: "0 0 22 * * Sunday",
  },
];

const runScheduler = (client) => {
  schedules.map((sched) => {
    cron.schedule(sched.schedule, () => reminder(client, sched), {
      scheduled: true,
      timezone: process.env.TZ || 'Asia/Manila',
    });
    cronRunInfo({ schedule: sched.schedule, title: sched.title });
  });
};

function reminder(client, sched) {
  let description = sched.description;

  client.channels.cache.get(CHANNEL_ID).send({
    embed: {
      color: "#88FFAD",
      title: `${sched.title}`,
      description: description,
    },
  });
}

function cronRunInfo(params) {
  console.log(`[CRON]: ${params.schedule}, ${params.title}`);
}

module.exports = {
  runScheduler,
};
