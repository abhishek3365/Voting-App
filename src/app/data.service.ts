import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService{

    apiURL: string = 'http://18.219.197.98:3000';

    constructor(private httpClient: HttpClient) {

    }

    castVote( team : string ) {

        return new Promise(  ( resolve , reject ) => {

            this.httpClient
            .post<any>(`${this.apiURL}/castVote` , { team })
            .subscribe( (response) => {
                if( response.success != null && response.success )
                    resolve()
                else
                    reject()
            } , 
            (error) => {
                reject()
            } )

        } )

    }

    getVoteCount(  ) {

        return new Promise(  ( resolve , reject ) => {

            this.httpClient
            .get<any>(`${this.apiURL}/voteCount`)
            .subscribe( (response) => {
                if( response.success != null && response.success )
                    resolve( response.payload  )
                else
                    reject()
            } , 
            (error) => {
                reject()
            } )

        } )

    }




}