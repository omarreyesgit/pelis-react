const API = "https://api.themoviedb.org/3";

export function getData(path) {
    return  fetch(API + path,{
        headers:{
            Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjgyMGFkYmJjOTY4MjcwZDlmMzBkZDRiOGM4NzNkYiIsInN1YiI6IjYwZjJlOWExZjI4ODM4MDA1ZWRjM2U1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wHFGKdchYo5uCcg3mIlF6szDimPfmmaBgTW6sMbhe7E",
            "Content-Type":"application/json;charset=utf-8",
        },
    }).then(result => result.json());
}