/** @format */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowDownIcon } from '@heroicons/react/20/solid';
import { useGetStoryIdsByTypeQuery } from '../api';
import Item from '../components/Item';
import Placeholder from '../components/Placeholder';

function ItemsView(props) {
    const { type } = props;
    const [count, setCount] = useState(20);
    const { data, error, isFetching, isLoading } = useGetStoryIdsByTypeQuery(
        type || 'top'
    );

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
                            className="mx-auto mt-4 rounded-full bg-slate-50 p-4 px-8 text-slate-900 shadow dark:bg-slate-800 dark:text-slate-300"
                            onClick={() => setCount(count + 20)}
                        >
                            <ArrowDownIcon className="h-5 w-5 text-slate-900 dark:text-slate-300 " />
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
