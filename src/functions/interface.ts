export interface Wilder {
    name: string;
    city: string;
    id: string;
    skills: Array<{
        title: string,
        votes: number
    }>; 
}