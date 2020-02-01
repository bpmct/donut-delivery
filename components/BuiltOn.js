//Set up BuiltOn
import Builton from "@builton/core-sdk";

//Get BuiltOn configuration
import { builtonConfig } from "../configuration/api_config";

//Authenticate with API key
const builton = new Builton(builtonConfig);

export default builton;
