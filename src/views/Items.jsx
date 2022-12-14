/** @format */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useGetStoryIdsByTypeQuery } from '../api';
import Item from '../components/Item';
import Placeholder from '../components/Placeholder';
import { useLocation } from 'react-router-dom';

function ItemsView(props) {
  const { type } = props;
  const [count, setCount] = useState(20);
  const { pathname } = useLocation();
  const { data, error, isFetching, isLoading } = useGetStoryIdsByTypeQuery(
    type || 'top'
  );

  useEffect(() => {
    setCount(20);
  }, [pathname]);

  if (error) {
    return <Placeholder message={error.message} />;
  }

  if (isLoading) {
    return <Placeholder message="Fetching items ..." />;
  }

  if (data) {
    return (
      <>
        {data.slice(0, count).map((id) => (
          <Item id={parseInt(id, 10)} key={id} level={-1} />
        ))}
        {data.length > count && (
          <div className="mt-auto flex flex-row">
            <button
              disabled={isFetching}
              className="mx-auto mt-4 rounded-full bg-slate-50 p-2 px-8 text-sm text-slate-900 shadow hover:text-orange-500 dark:bg-slate-800 dark:text-slate-300"
              onClick={() => setCount(count + 20)}
            >
              Show More
            </button>
          </div>
        )}
      </>
    );
  }
}

ItemsView.propTypes = {
  type: PropTypes.string,
};

export default ItemsView;
