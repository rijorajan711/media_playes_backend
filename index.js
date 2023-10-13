// set up the path/route from jsonfile
const jsonServer=require("json-server");

// create server
const meadiaPlayerServer=jsonServer.create();


// set up the path/route from jsonfile
const router=jsonServer.router("json_db.json");


// middleware to convert  joson data to js object ,js to 
const middlewares=jsonServer.defaults();


//to set port number
const port=4000||process.env.PORT

// use middleware and router in server
meadiaPlayerServer.use(middlewares)
meadiaPlayerServer.use(router)

// listen to the port
meadiaPlayerServer.listen(port,()=>{
    console.log("server conncted to 4000")
})







