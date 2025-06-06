const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
  const apiKey = process.env.GOOGLE_MAP_API_KEY; // Ensure you have set this environment variable
  const url=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
  try {
    const response = await axios.get(url);
    if( response.data.status=='OK'){
      const location = response.data.results[0].geometry.location;
      return {
        lat: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error('No results found for the given address.');
    }
  } catch (error) {
    throw new Error(`Failed to get coordinates: ${error.message}`);
  }
};
module.exports.getDistanceTime = async (origin, destination) => {
  if(!origin || !destination){
    throw new Error('Origin and destination are required');

}
const apikey=process.env.GOOGLE_MAP_API_KEY; // Ensure you have set this environment variable
const url=`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apikey}`;
try{
    const response=await axios.get(url);
    if(response.data.status=='OK'){
      if(response.data.rows[0].elements[0].status=='ZERO_RESULTS'){
        throw new Error('NO ROUTES FOUND');
      }
        return response.data.rows[0].elements[0];
          
        }else{
        throw new Error('Unable to fetch distance  and time.');
    }


}
catch(err){
    console.error(err);
    throw err;
}
}
module.exports.getAutoCompleteSuggestions = async (input) => {
 if(!input) {
    throw new Error('Address is required');
  }
  const apiKey = process.env.GOOGLE_MAP_API_KEY; // Ensure you have set this environment variable
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;
  try {
    const response = await axios.get(url);
    if (response.data.status === 'OK') {
      return response.data.predictions;
    } else {
      throw new Error('Unable to fetch suggestions.');
    }
  } catch (err) {
    console.log(err);
    throw err;
  }

}

