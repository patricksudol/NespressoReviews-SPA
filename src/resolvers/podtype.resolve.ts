import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Podtype } from 'src/app/models/podtype.model';
import { PodTypeService } from "src/app/services/podtype/podtype.service";

@Injectable({providedIn: 'root'})
export class PodTypesResolve implements Resolve<Podtype[]> {
    constructor(private podTypeService: PodTypeService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Podtype[]> {
        return this.podTypeService.getPodTypes();
    }
}
