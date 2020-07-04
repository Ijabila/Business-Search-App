import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer wqGjdvmFQmJr10zswAXlC4iUfa1tRDErTbXoleCYhgyNF2l8bYTA6lFHJ_Q04QuoIr1Glqe6u1-SOrye1y4TEmIZLKFwpu_42vC1s0m0bEjiFqpYwwGq8Qo6WX71XnYx'
    }

});