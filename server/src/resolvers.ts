import { Resolvers } from "./types";

export const resolvers: Resolvers = {
        Query: {
            // get all tracks, will be used to populate the homepage grid of our web client
            tracksForHome: (_, __, { dataSources }) => {
                return dataSources.trackAPI.getTracksForHome();
            },
        },
        Track: {
            author: async ({ authorId }, _, { dataSources }) => {
                const authors = await dataSources.trackAPI.getAuthor(authorId);
                return authors[0]; // Assuming there is only one author per track
            },
        },
    };
