import { PRODUCTS_FETCH } from '../action/types';

export default function(state = [], action) {
    switch (action.type) {
        case PRODUCTS_FETCH : 
                return action.payload
        default: 
                return state;
    }
}