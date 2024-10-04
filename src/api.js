import axios from "axios";

const searchImage= async (term)=>{
    const response= await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization:'Client-ID 3pSro9J3RFMafNDs4ZtQ2_VRWqbHXcVvu1StHKZKg8Y',
        },
        params:{
            query: term,
        },
    });

    return response.data.results;
};

export default searchImage;