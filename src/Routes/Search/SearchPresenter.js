import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import {Helmet} from "react-helmet";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
                             movieResults,
                             tvResults,
                             loading,
                             searchTerm,
                             handleSubmit,
                             error,
                             updateTerm
                         }) =>
    <>
        <Helmet>
            <title>Search || Example</title>
        </Helmet>
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Search Movies or TV shows..." value={searchTerm} onChange={updateTerm}/>
        </Form>
        {loading ? <Loader/> :
            <>
            {movieResults && movieResults.length > 0 &&
            (<Section title="Movie Results">
                {movieResults.map(movie=><Poster key={movie.id}
                                                 id={movie.id}
                                                 title={movie.original_title}
                                                 imageUrl={movie.poster_path}
                                                 isMovie={true}
                                                 rating={movie.vote_average}
                                                 year={movie.release_date && movie.release_date.substring(0,4)}/>)}
            </Section>)}
            {tvResults && tvResults.length >0 &&
            (<Section title="TV Show Results">
                {tvResults.map(show=>
                    <Poster title={show.original_name}
                            id={show.id}
                            key={show.id}
                            rating={show.vote_average}
                            imageUrl={show.poster_path}
                            year={show.first_air_date.substring(0,4)}
                    />)}
            </Section>)}
            </>
        }
        {error && <Message color="red" text={error}/>}
        {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && <Message text="Nothig Found" color="gray" />}
    </Container>
    </>;

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    error: PropTypes.string,
    searchTerm: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm:PropTypes.func.isRequired
};

export default SearchPresenter;