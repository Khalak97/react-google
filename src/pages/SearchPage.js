import React from 'react';
import { Link } from 'react-router-dom';

import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';

import Search from '../components/Search';

//import Response from './response';

import './SearchPage.css';

function SearchPage() {
  const [{ term }, dispath] = useStateValue();
  const { data } = useGoogleSearch(term);

  // const data = Response;
  // console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="logo"
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />

          <div className="searchPage__options"></div>
        </div>
      </div>

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link}>
                {item.displayLink}
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultsSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
