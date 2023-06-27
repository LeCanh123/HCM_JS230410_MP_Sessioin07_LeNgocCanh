import { createStore } from "redux"; 
import React from 'react'
import combineReducer from "./combineReducer";





export const store = createStore(combineReducer)
