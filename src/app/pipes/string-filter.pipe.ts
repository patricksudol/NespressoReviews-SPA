import { Pipe, PipeTransform } from '@angular/core';
import { Pod } from '../models/pod';

// TODO: Trim white space
@Pipe({
  name: 'podFilter'
})
export class StringFilterPipe implements PipeTransform {
  transform(pods: Pod[], q: string) {
    if (!q || q === '') {
      return pods;
    }
    console.log(pods);
    return pods.filter(pod => -1 < pod.name.toLowerCase().indexOf(q.toLowerCase()));
  }
}
