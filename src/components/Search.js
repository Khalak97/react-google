import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';

import './Search.css';

import { actionTypes } from '../reducer';

function Search({ hideButtons = false }) {
  const [{}, dispath] = useStateValue();

  const [input, setInput] = useState('');
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    dispath({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    //do something with input
    history.push('/search');
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Search
          </Button>
          <Button variant="outlined">I'm Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined">
            Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
