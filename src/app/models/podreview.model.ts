export interface PodReview {
    id: string;
    userId: string;
    podId: string;
    score: number;
    header: string;
    description: string;
    createdDate: Date;
}
