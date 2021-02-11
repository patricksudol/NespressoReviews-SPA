import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Pod } from "src/app/models/pod.model";
import { PodService } from "src/app/services/pod/pod.service";

@Injectable({providedIn: 'root'})
export class OriginalPodsResolve implements Resolve<Pod[]> {
    constructor(private podService: PodService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Pod[]> {
        return this.podService.getPodByType('Original');
    }
}
