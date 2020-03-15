//Set up BuiltOn
import Builton from "@builton/core-sdk";

//Authenticate with API key
const builton = new Builton({ apiKey: process.env.BUILTON_APIKEY });

export default builton;
