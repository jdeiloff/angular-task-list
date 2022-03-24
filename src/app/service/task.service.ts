import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http'
import {TASKS} from '../mock-tasks'
import {Task} from '../task' 
import {Observable, of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = ' http://localhost:5000/tasks'
  constructor(
    private http:HttpClient
  ) { }

  getTastks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
}
