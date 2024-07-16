interface Media {
    title: string;
    genres: string[];
    director?: { name: string };
}
  
export const fetchMediaData: Media = {
    title: "goodfellas", 
    genres: ['drama', 'crime']
}
  
console.log(fetchMediaData.director?.name); 