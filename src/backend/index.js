const express=require("express")
const app=new express();
const cors=require("cors")
const multer = require('multer');
const loginModel = require("./login");
const Workermodel = require("./WorkerReg");
const Clientmodel = require("./ClientReg");
const addworkmodel = require("./addwork");
const appmodel = require("./booking");
const storage = multer.memoryStorage(); // Store images in memory
const upload = multer({ storage: storage })
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post("/signup", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if user with provided email already exists
      const existingUser = await loginModel.findOne({ email });
      if (existingUser) {
        // User already exists
        return res.send("exist");
      } else {
        // User doesn't exist, create a new user
        await loginModel.create({ email, password });
        return res.send("notexist");
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send("Server Error");
    }
  });
  
  // Endpoint for user login
  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await loginModel.findOne({ email, password });
      if (user) {
        return res.json({ success: true, message: "Login Successfully" });
      } else {
        return res.json({ success: false, message: "Invalid Email or Password" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: "Server Error" });
    }
  });

  app.post('/new',upload.single('image1'),async (request,response) => {
    try {
        const { name, phone, job, experience, location } = request.body
        const newdata = new Workermodel({
            name, phone, job, experience, location,
            image1: {
                data:request.file.buffer,
                contentType: request.file.mimetype,}
        })
        // console.log(newdata);
        await newdata.save();
        response.status(200).json({ message: 'Record saved' });

    }
    catch (error) {
        response.status(500).json({ error: 'Internal Server Error' });

    }

    

})

app.post('/cnew',upload.single('image1'),async (request,response) => {
    try {
        const { name, phone, location } = request.body
        const newdata = new Clientmodel({
            name, phone, location,
            image1: {
                data:request.file.buffer,
                contentType: request.file.mimetype,}
        })
        console.log(newdata);
        await newdata.save();
        response.status(200).json({ message: 'Record saved' });

    }
    catch (error) {
        response.status(500).json({ error: 'Internal Server Error' });

    }

    

})
app.get('/view', async (request, response) => {
    var data = await Workermodel.find();
    // console.log(data)
    response.send(data)
})


app.post('/addwork',upload.single('image1'),async (request,response) => {
  try {
      const { name,phone, location,description,serivce } = request.body
      const newdata = new addworkmodel({
          name, phone, location,description,serivce,
          image1: {
              data:request.file.buffer,
              contentType: request.file.mimetype,}
      })
      console.log(newdata);
      await newdata.save();
      response.status(200).json({ message: 'Record saved' });

  }
  catch (error) {
      response.status(500).json({ error: 'Internal Server Error' });

  }

  

})

app.get('/addworkview', async (request, response) => {
  var data = await addworkmodel.find();
  // console.log(data)
  response.send(data)
})

app.get("/view/:id", async (request, response) => {
  const { id } = request.params;
  var data = await addworkmodel.findById(id);
  console.log(data);
  response.send(data);
});


app.get("/view/:id", async (request, response) => {
  const { id } = request.params;
  var data = await WorkerReg.findById(id);
  console.log(data);
  response.send(data);
});
app.get("/book/:id", async (request, response) => {
  const { id } = request.params;
  var data = await appmodel.findById(id);
  console.log(data);
  response.send(data);
});

app.post("/booking",  async (request, response) => {
  console.log(request.body)
   new appmodel(request.body).save();
   response.send("Record Saved")
})

app.get('/booking', async (request, response) => {
  var data = await appmodel.find();
  response.send(data)
});