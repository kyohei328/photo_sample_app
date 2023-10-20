import React from 'react';
import { Helmet } from 'react-helmet-async';

const YourComponent = () => {
  return (
    <div>
      {/* 他のコンテンツ */}
      
      {/* OGPメタデータ */}
      <Helmet>
        <title>PhotoSample</title>
        <meta name="description" content="sample_app" />
        <meta property="og:title" content="ウェブサイトのタイトル" />
        <meta property="og:description" content="ウェブサイトの説明文" />
        <meta property="og:image" content="/frontend/public/favicon.ico" />
        {/* 他のOGPメタデータ */}
      </Helmet>
    </div>
  );
};

export default YourComponent;
