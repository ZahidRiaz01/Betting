const cron = require("node-cron");
const Betting = require("./database/schema");
exports.startBatting = async (req, res) => {
  try {
    let { bol, method, amount, id } = req.query;

    let betting = new Betting();
    let bettingdata = await Betting.find();
    if (bettingdata.length) {
      console.log("id", id);
      let filter = {
        id: id,
      };
      const options = { upsert: true };
      let updateOneRecord = {
        $set: {
          action: bol,
          method: method,
          amount: amount,
          id: id,
        },
      };
      let res = await Betting.findOneAndUpdate({ id: "7878" }, updateOneRecord);
    } else {
      betting.action = bol;
      betting.method = method;
      betting.amount = amount;
      betting.id = id;
      await betting.save();
    }

    console.log("bol", typeof bol);

    res.status(200).send("api start");
  } catch (e) {
    console.error("error while", e);
    res.status(500).send({ msg: e });
  }
};

exports.checkBatting = () => {
  cron.schedule("*/1 * * * *", () => {
    console.log("running a task every one minutes");
  });
};
