export interface Poll extends PollForm{
    id: number;
    results: number[];
    voted: boolean;

}
export interface PollForm{

    options: string[];
    question: string;
    thumbnail: string;
    
}

export interface Voter{
    id: string;
    voted: number[];
}