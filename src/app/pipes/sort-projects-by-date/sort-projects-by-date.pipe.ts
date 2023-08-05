import { Pipe, PipeTransform } from '@angular/core';
import { Project } from 'src/app/models/project';
/*
 * Sorts projects by the updated_at property
 * Usage:
 *   value | sortProjectsByDate
 * Example:
 *   {{ projects | sortProjectsByDate }}
*/
@Pipe({name: 'sortProjectsByDate'})
export class sortProjectsByDatePipe implements PipeTransform {
  transform(value?: Project[]|null): Project[] {
    if (!value) return [];
    return [...value].sort((a, b) => new Date(b.updated_at).valueOf() - new Date(a.updated_at).valueOf());
  }
}