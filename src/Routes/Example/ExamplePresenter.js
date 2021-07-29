import React from 'react';

const ExamplePresenter = ({createc,sample2,deletec,updatec}) =>
    <>
    <div>
        <button onClick={(e)=>sample2(e)} value='login' >login</button>
        <button onClick={(e)=>sample2(e)} value='logout'>logout</button>
    </div>
    <div>
       <button onClick={createc}>create</button>
       <button onClick={deletec}>delete</button>
       <button onClick={updatec}>update</button>
    </div>
    </>
;

export default ExamplePresenter;