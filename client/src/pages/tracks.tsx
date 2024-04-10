import React from "react";
import { Layout } from "../components";
import QueryResult from "../components/query-result";
import { gql, TypedDocumentNode, OperationVariables, useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";
import { Track } from "../__generated__/graphql";

/** TRACKS query to retrieve all tracks */
const TRACKS: TypedDocumentNode<any, OperationVariables> = gql(`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`);

const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track: Track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
