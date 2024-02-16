import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "@/api";
import dateCreated from "@/utils/dateCreated";
import Placeholder from "@/components/Placeholder";

export default function UserView() {
  const { id } = useParams();
  const { data, error, isFetching, isLoading } = useGetUserByIdQuery(id);

  if (error && error instanceof Error) {
    return <Placeholder message={error.message} />;
  }

  if (isLoading) {
    return <Placeholder message="Fetching user ..." />;
  }

  if (data) {
    return (
      <div
        className={`mt-4 flex flex-col rounded bg-slate-50 p-4 text-slate-900 shadow dark:bg-slate-800 dark:text-slate-300 ${
          isFetching
            ? "pointer-events-none text-slate-900/50 dark:text-slate-300/50"
            : "text-slate-900 dark:text-slate-300"
        }`}
      >
        <div className="mb-2">
          <h2>{id}</h2>
        </div>
        {data.about && (
          <div
            className="mb-2 overflow-auto text-sm"
            dangerouslySetInnerHTML={{
              __html: data.about,
            }}
          />
        )}
        <div className="text-xs">
          {data.karma && <>{data.karma} karma • </>}
          {dateCreated(data.created)}
        </div>
      </div>
    );
  }
}
