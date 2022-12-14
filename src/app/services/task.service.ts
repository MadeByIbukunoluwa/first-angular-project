import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable, } from 'rxjs';
import { Task } from 'src/app/Task';
// import { TASKS } from 'src/app/mocktasks';



const httpOptions = {
    headers : new HttpHeaders({
    'Content-type':'application/json'
  })
}




@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://my-json-server.typicode.com/MadeByIbukunoluwa/tasks-api-server/tasks'
  // private apiUrl = 'http://localhost:5000/tasks'
  constructor(private http:HttpClient) { }
  getTasks(): Observable<Task[]> {
    //  const tasks = of(TASKS)
    //  return tasks
    return this.http.get<Task[]>(this.apiUrl)
  }
  deleteTask(task : Task):Observable<Task>  {
        const url = `${this.apiUrl}/${task.id}`
        return this.http.delete<Task>(url)
  }
  updateTaskReminder(task:Task) : Observable<Task> {
      const url = `${this.apiUrl}/${task.id}`;
      return this.http.put<Task>(url, task, httpOptions)
  }
  addTask(task:Task): Observable<Task> {
      return this.http.post<Task>(this.apiUrl,task,httpOptions)
  }
}

// https://mockend.com/MadeByibukunoluwa2/angular-project-backend/users needs to be in only the structure they specified 


// https://my-json-server.typicode.com/MadeByIbukunoluwa/tasks-api-server



