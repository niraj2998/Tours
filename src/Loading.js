import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className="loading">
      <ReactLoading className="load" type={'bars'} color={'hsl(205, 63%, 48%)'} height={'60%'} width={'60%'} /><h1>Loading...</h1>
    </div>
  );
};

export default Loading;
