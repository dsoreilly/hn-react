/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useGetItemByIdQuery } from '../api';
import timeAgo from '../utils/timeAgo';
import Placeholder from './Placeholder';

function Item(props) {
  const { data, error, isFetching, isLoading } = useGetItemByIdQuery(props.id);

  if (error) {
    return <Placeholder message={error.message} />;
  }

  if (isLoading && props.level === 0) {
    return <Placeholder message="Fetching item ..." />;
  }

  if (data) {
    return (
      <div className={props.level > 1 ? 'ml-8' : ''}>
        <div
          className={`flex flex-col ${
            props.level <= 0
              ? 'mt-4 rounded bg-slate-50 p-4 shadow dark:bg-slate-800'
              : props.level >= 0
              ? 'mb-4'
              : ''
          } ${
            isFetching || data.deleted
              ? 'pointer-events-none text-slate-900/50 dark:text-slate-300/50'
              : 'text-slate-900 dark:text-slate-300'
          }`}
        >
          {data.title && (
            <div className="mb-2">
              <a className="hover:underline" href={data.url ? data.url : ''}>
                <h2>{data.title}</h2>
              </a>
            </div>
          )}
          {props.level >= 0 && data.text && (
            <div
              className="mb-2 overflow-auto text-sm"
              dangerouslySetInnerHTML={{
                __html: data.text,
              }}
            />
          )}
          {props.level >= 0 && data.deleted && (
            <div className="mb-2 text-sm italic">deleted</div>
          )}
          <div className="text-xs">
            {data.score > -1 && `${data.score} points by `}
            <Link className="hover:underline" to={`/user/${data.by}`}>
              {data.by}
            </Link>{' '}
            {timeAgo(data.time)}
            {data.descendants > -1 && (
              <>
                {' '}
                •{' '}
                <Link className="hover:underline" to={`/item/${data.id}`}>
                  {data.descendants} comments
                </Link>
              </>
            )}
          </div>
          {props.level === 0 &&
            data.parts &&
            data.parts.length > 0 &&
            data.parts.map((id) => <Item id={Number(id)} key="id" level={0} />)}
        </div>
        <div
          className={
            props.level === 0
              ? 'mt-4 rounded bg-slate-50 p-4 shadow dark:bg-slate-800'
              : ''
          }
        >
          {props.level >= 0 &&
            data.kids &&
            data.kids.length > 0 &&
            data.kids.map((id) => (
              <Item id={Number(id)} key={id} level={props.level + 1} />
            ))}
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
};

export default Item;
