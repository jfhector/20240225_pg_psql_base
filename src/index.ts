import "./app/router";

process.on("uncaughtException", (err:Error) => {
    console.error(err);
    // TODO OPTIONAL also use this for uncaughtException and unhandledRejection, see 2.4 Handle errors centrally, not within a middleware
});
  
process.on("unhandledRejection", (reason) => {
    console.error(reason);
    // TODO OPTIONAL also use this for uncaughtException and unhandledRejection, see 2.4 Handle errors centrally, not within a middleware
});