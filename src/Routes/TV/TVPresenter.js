import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import {Helmet} from "react-helmet";

const Container = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
    <>
        <Helmet>
            <title>TV || Example</title>
        </Helmet>
        {loading ? <Loader/> :
            <Container>
                {topRated && topRated.length > 0 &&
                <Section title="Top Rated Show">
                    {topRated.map(show =>
                        <Poster title={show.original_name}
                                id={show.id}
                                key={show.id}
                                rating={show.vote_average}
                                imageUrl={show.poster_path}
                                year={show.first_air_date.substr(0, 4)}
                        />)}
                </Section>}
                {popular && popular.length > 0 &&
                <Section title="Popular Show">
                    {popular.map(show =>
                        <Poster title={show.original_name}
                                id={show.id}
                                key={show.id}
                                rating={show.vote_average}
                                imageUrl={show.poster_path}
                                year={show.first_air_date.substr(0, 4)}/>
                    )}
                </Section>}
                {airingToday && airingToday.length > 0 &&
                <Section title="Airing Today">{airingToday.map(show =>
                    <Poster title={show.original_name}
                            id={show.id}
                            key={show.id}
                            rating={show.vote_average}
                            imageUrl={show.poster_path}
                            year={show.first_air_date.substr(0, 4)}
                    />
                )}
                </Section>}
                {error && <Message text={error} color="red"/>}
            </Container>}
    </>;

TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default TVPresenter;