import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import {HttpEvent,
        HttpInterceptor,
        HttpHandler,
        HttpRequest,
        HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthserviceService } from './services/auth/authservice.service';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
    providedIn: 'root'
})
export class Interceptor implements HttpInterceptor{

    constructor(private auth:AuthserviceService,
        private cookieService: CookieService){}

    intercept (r: HttpRequest<any>, n: HttpHandler) : Observable <HttpEvent <any>> {
        console.log("INTERCEPTED")
        const token = localStorage.getItem('Autorization')
        console.log(token, 'test')
        if ( localStorage.getItem('Authorization') == null ){
            
            console.log('interceptest')
            const req = r.clone({
            
                //headers: r.headers.set('Authorization', 'Token ' + localStorage.getItem('Authorization')),
                headers: r.headers.set('X-CSRFToken', this.cookieService.get('csrftoken'))

                // headers: new HttpHeaders({
                //     'X-CSRFToken': this.cookieService.get('csrftoken'),
                //     'Authorization': 'Token ' + localStorage.getItem('Authorization')
                //   })

                // headers: r.headers.set('X-CSRFToken', this.cookieService.get('csrftoken'))
                // .set('Authorization', 'Token ' + localStorage.getItem('Authorization'))

                // setHeaders: { 'X-CSRFToken': this.cookieService.get('csrftoken'),
                //               'Authorization': 'Token ' + localStorage.getItem('Authorization')
                //             }

            });
        

        

        
        // let newreq = req.clone({
        //     headers:req.headers.set('X-CSRFToken', this.cookieService.get('csrftoken'))
        // })
        // req = req.headers.set('X-CSRFToken', this.cookieService.get('csrftoken'))

        return n.handle(req).pipe(tap(
            resp => {
                if (resp instanceof Interceptor) return resp;
            }
        ));
        // return n.handle(req);
        }



        else if ( localStorage.getItem('Authorization') != null ){
            
                console.log('interceptest')
                const req = r.clone({

                    setHeaders: { 'X-CSRFToken': this.cookieService.get('csrftoken'),
                                'Authorization': 'Token ' + localStorage.getItem('Authorization')
                                }

                });
            

            return n.handle(req).pipe(tap(
                resp => {
                    if (resp instanceof Interceptor) return resp;
                }
            ));
        }
       

       
    }

    Token(){
        const t = _.get(this.auth.getToken(), ['token'], null);
        return `Token ${t}`;
    }
}
