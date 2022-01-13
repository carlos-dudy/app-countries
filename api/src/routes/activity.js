const { Router } = require("express");
const { Activity, Country } = require("../db.js");

const router = Router();

router.post("/", async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;

  try {
    const [activity] = await Activity.findOrCreate({
      where: {
        name,
        difficulty,
        duration,
        season,
      },
    });

    await activity.addCountries(countries);

    res.status(200).json("Activity created");
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    let activities = await Activity.findAll();
    res.json(activities);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

//Modificar una actividad
router.put("/", async (req, res, next) => {
    try {
      const { name, dificulty, duration, season, countries } = req.body;
      const activity = await Activity.findOne({
        where: {
          name: {
            [Op.eq]: name,
          },
        },
      });
      //console.log("ACTIVIDAD", activity)

      activity.dificulty = dificulty;
      activity.duration = duration;
      activity.season = season;
      await activity.save();
  
      let ctry;
      if (Array.isArray(countries)) {
        ctry = await Promise.all(
          countries.map((country) => Country.findByPk(country.id))
        );
      }
      if (ctry) {
        await activity.setCountries(ctry);
      }
      return res.send(activity);
    } catch (error) {
      next(error);
    }
  });

  //eliminar
 router.delete('/:id', async (req,res, next)=>{
     const {id}= req.params
    try{
        const activity = await Activity.destroy({
            where: {
              id: {
                [Op.eq]: id,
              },
            },
          });
          
          res.json(`Actividad ${id} eliminada`)
    }catch(err){
        next(err)
    }
 })






module.exports = router;