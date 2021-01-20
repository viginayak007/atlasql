/**
 * Express context can be used here, for eg. Request and response from the client
 * 
 */
import {Request, Response} from 'express';

export interface paramContext {
    req : Request;
    res : Response;
}