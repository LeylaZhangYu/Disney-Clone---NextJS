import { Genres } from "@/typings";
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuLabel, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger 
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

async function GenreDropdown() {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        },
        // include cache
        next: {
            revalidate: 60 * 60 * 12, // 12 hours
        }
    };

    // try {
    //     const response = await fetch(url, options);

    //     if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //     }

    //     const data = await response.json();
    //     // Process the fetched data, update state, etc.

    //     console.log(data); // Log the data for debugging
    // } catch (error) {
    //     console.error("Error fetching data:", error);
    // }

    const response = await fetch(url, options);
    const data = (await response.json()) as Genres;

    console.log(data.genres);

    return (
        <div></div>
        // <DropdownMenu>
        //     <DropdownMenuTrigger className="text-white flex justify-center items-center">
        //         Genre <ChevronDown className="nl-1" />
        //     </DropdownMenuTrigger>
        //     <DropdownMenuContent>
        //         <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
        //         <DropdownMenuSeparator />

        //         {data.genres.map(genre => (
        //             <DropdownMenuItem key={genre.id}>
        //                 <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
        //                     {genre.name}
        //                 </Link>
        //             </DropdownMenuItem>
        //         ))}
        //     </DropdownMenuContent>
        // </DropdownMenu>
    )
}

export default GenreDropdown;