export interface Activity{
    map(arg0: (activity: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
    id: string;
    tittle: string;
    date: string;
    description: string;
    category: string;
    city:  string;
    venue: string;
}