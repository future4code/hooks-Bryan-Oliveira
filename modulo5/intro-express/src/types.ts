export type UserSearch = {
    "id": number,
    "name": string,
    "website": string,
    "email": string, 
}

export type User = {
    "id": number,
    "name": string,
    "website": string,
    "email": string,
    "username": string,
    "phone": string,
    "posts": Post []
  }

export type Post = {  
    id: number,
    title: string,
    body: string,
    userId: number,
}